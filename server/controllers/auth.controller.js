if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generator = require("generate-password");
const tables = require("../config/associations");
const transporter = require("../services/transporter");

const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    password: plainTextPassword,
  } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const user = await tables.Customer.create({
      firstName,
      lastName,
      phone,
      email,
      password,
      kilometersDriven: 0,
    });

    const emailToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.EMAIL_TOKEN_SECRET
    );
    const confirmationUrl = `http://localhost:5000/api/v1/confirmation/${emailToken}`;

    await transporter.sendMail({
      to: user.email,
      subject: "E-Mail bestätigen",
      html: `Bitte klicken Sie auf den folgenden Link, 
      um Ihre E-Mail zu verifizieren: <a href="${confirmationUrl}">${confirmationUrl}</a>`,
    });

    res.status(200).json({
      success: true,
      data: "Wir haben Ihnen eine Bestätigungsmail zugesendet",
    });
  } catch (error) {
    if (error.parent.errno === 1062) {
      res.status(409).json({
        success: false,
        data: "Ein Benutzer mit dieser E-Mail existiert bereits",
      });
    }

    res.status(500).json({
      success: false,
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.params;

  try {
    const user = jwt.verify(token, process.env.EMAIL_TOKEN_SECRET);

    await tables.Customer.update(
      { confirmed: true, blocked: false },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.redirect("http://localhost:3000/login");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password, attemptNumber } = req.body;
  const user = await tables.Customer.findOne({ where: { email } });

  if (!user) {
    const partnerUser = await tables.Partner.findOne({ where: { email } });

    if (partnerUser) {
      if (await bcrypt.compare(password, partnerUser.password)) {
        const token = jwt.sign(
          {
            id: partnerUser.id,
            email: partnerUser.email,
            role: partnerUser.userRole,
          },
          process.env.ACCESS_TOKEN_SECRET
        );

        return res.status(200).json({
          success: true,
          data: token,
          role: partnerUser.userRole,
        });
      }
    }

    return res.status(409).json({
      success: false,
      data: "Ungültige E-Mail oder ungültiges Passwort",
    });
  }

  if (!user.confirmed) {
    return res.status(401).json({
      success: false,
      data: "Bitte bestätigen Sie die Registrierung",
    });
  }

  if (user.blocked) {
    return res.status(401).json({
      success: false,
      data: "Ihr Konto wurde gesperrt. Klicken Sie auf 'Passwort vergessen', um ein neues Passwort zu generieren",
    });
  }

  if (attemptNumber >= 3) {
    tables.Customer.update({ blocked: true }, { where: { id: user.id } });

    return res.status(401).json({
      success: false,
      data: "Ihr Konto wurde gesperrt. Klicken Sie auf 'Passwort vergessen', um ein neues Passwort zu generieren",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.userRole,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      success: true,
      data: token,
      role: user.userRole,
    });
  } else {
    res.status(409).json({
      success: false,
      data: "Ungültige E-Mail oder ungültiges Passwort",
    });
  }
};

const changePassword = async (req, res) => {
  const { token, newPassword: plainTextPassword } = req.body;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const password = await bcrypt.hash(plainTextPassword, 10);

    await tables.Customer.update(
      { password: password },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.status(200).json({
      success: true,
      data: "Ihr Passwort wurde erfolgreich zurückgesetzt",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Etwas ist schiefgelaufen 😞",
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await tables.Customer.findOne({ where: { email: email } });

    if (!user) {
      return res.status(409).json({
        success: false,
        data: "Ungültige E-Mail",
      });
    }

    if (!user.confirmed) {
      return res.status(401).json({
        success: false,
        data: "Bitte bestätigen Sie die Registrierung",
      });
    }

    const plainTextPassword = generator.generate({
      length: 10,
      numbers: true,
    });

    user.password = await bcrypt.hash(plainTextPassword, 10);
    await user.save();

    const emailToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.EMAIL_TOKEN_SECRET
    );
    const confirmationUrl = `http://localhost:5000/api/v1/confirmation/${emailToken}`;

    await transporter.sendMail({
      to: user.email,
      subject: "Konto reaktivieren",
      html: `Ihr neues Passwort: ${plainTextPassword}<br>Bitte klicken Sie auf den folgenden Link, 
      um Ihr Konto zu reaktivieren: <a href="${confirmationUrl}">${confirmationUrl}</a>`,
    });

    res.status(200).json({
      success: true,
      data: "Wir haben Ihnen eine Bestätigungsmail zugesendet",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getUsername = async (req, res) => {
  const { token } = req.params;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (user.role === "customer") {
      const customer = await tables.Customer.findOne({
        where: { id: user.id },
      });

      return res.status(200).json({
        success: true,
        data: customer.firstName + " " + customer.lastName,
      });
    } else if (user.role === "partner") {
      const partner = await tables.Partner.findOne({
        where: { id: user.id },
      });

      return res.status(200).json({
        success: true,
        data: partner.name,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Etwas ist schiefgelaufen 😧",
    });
  }
};

module.exports = {
  getUsername,
  registerUser,
  verifyUser,
  loginUser,
  changePassword,
  forgotPassword,
};
