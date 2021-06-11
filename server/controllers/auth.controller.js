if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    console.log(user);
    await tables.Customer.update(
      { confirmed: true },
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
  const { email, password } = req.body;
  const user = await tables.Customer.findOne({ where: { email } });

  if (!user) {
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

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      success: true,
      data: token,
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

module.exports = { registerUser, verifyUser, loginUser, changePassword };
