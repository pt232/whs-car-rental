const pdf = require("html-pdf");
const tables = require("../config/associations");
const contractTemplate = require("../documents/contract");
const protocolTemplate = require("../documents/protocol");

const createContract = async (req, res) => {
  const { reservationId, data } = req.body;
  const { driversFee } = await tables.Reservation.findOne({
    where: { id: reservationId },
  });
  let pdfData;

  if (driversFee) {
    pdfData = {
      ...data,
      driversFee: {
        fittingName: "Zweitfahrer unter 25",
        fee: 0.25,
        feeText: "25%",
      },
    };
  } else {
    pdfData = data;
  }

  pdf.create(contractTemplate(pdfData, {})).toBuffer((err, buffer) => {
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
  const { reservationId, carId, customerId, data } = req.body;

  pdf.create(protocolTemplate(data, {})).toBuffer((err, buffer) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, data: "Etwas ist schiefgelaufen 😧" });
    }

    const updateProtocol = async () => {
      try {
        await tables.Customer.increment("kilometers_driven", {
          by: data.mileage,
          where: { id: customerId },
        });

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
