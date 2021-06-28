const pdf = require("html-pdf");
const tables = require("../config/associations");
const contractTemplate = require("../documents/contract");
const protocolTemplate = require("../documents/protocol");

const createContract = async (req, res) => {
  const { reservationId, data } = req.body;

  pdf.create(contractTemplate(data, {})).toBuffer((err, buffer) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, data: "Etwas ist schiefgelaufen 😧" });
    }

    const updateProtocol = async () => {
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

    updateProtocol();
  });
};

const createProtocol = async (req, res) => {
  const { reservationId, carId, data } = req.body;

  pdf.create(protocolTemplate(data, {})).toBuffer((err, buffer) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, data: "Etwas ist schiefgelaufen 😧" });
    }

    const updateProtocol = async () => {
      try {
        await tables.Car.update({ available: true }, { where: { id: carId } });

        await tables.Reservation.update(
          {
            backProtocol: buffer,
            status: 4,
          },
          { where: { id: reservationId } }
        );

        res.status(200).json({
          success: true,
          data: "Das Rücknahmeprotokoll wurde erfolgreich erstellt",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          data: "Etwas ist schiefgelaufen 😧",
        });
      }
    };

    updateProtocol();
  });
};

module.exports = {
  createContract,
  createProtocol,
};
