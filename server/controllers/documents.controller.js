const pdf = require("html-pdf");
const tables = require("../config/associations");
const contractTemplate = require("../documents/contract");

const createContract = async (req, res) => {
  const { reservationId } = req.body;

  pdf.create(contractTemplate("", {})).toBuffer((err, buffer) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, data: "Etwas ist schiefgelaufen 😧" });
    }

    const updateContract = async () => {
      try {
        await tables.Reservation.update(
          {
            contract: buffer,
          },
          { where: { id: reservationId } }
        );

        res.status(200).json({
          success: true,
          data: "Der Mietvertrag wurde erfolgreich erstellt",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          data: "Etwas ist schiefgelaufen 😧",
        });
      }
    };

    updateContract();
  });
};

module.exports = {
  createContract,
};
