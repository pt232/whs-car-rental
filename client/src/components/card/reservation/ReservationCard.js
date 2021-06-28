import React, { useState, useContext } from "react";
import { saveAs } from "file-saver";
import { bufferToBlob } from "../../../utils/helpers";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import Modal from "../../modal/Modal";
import ContractForm from "../../form/contract/ContractForm";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./ReservationCard.css";
import ProtocolForm from "../../form/protocol/ProtocolForm";

const ReservationCard = ({ reservation, back }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const { updateReservationStatus } = useContext(ReservationContext);
  const { id, status, car, partner, contract, backProtocol } = reservation;

  const downloadPdf = (type) => {
    let pdfBlob;

    if (type === "contract" && contract != null) {
      pdfBlob = bufferToBlob(contract, "application/pdf");
      saveAs(pdfBlob, "Mietvertrag.pdf");
    } else if (type === "protocol" && backProtocol != null) {
      pdfBlob = bufferToBlob(backProtocol, "application/pdf");
      saveAs(pdfBlob, "Rücknahmeprotokoll.pdf");
    }
  };

  return (
    <>
      <div className="reservation-card">
        <div>
          <h3 className="reservation-card__title">
            {car.carType.carClass.name}
          </h3>
          <h3
            style={
              localStorage.getItem("role") === "partner"
                ? { marginBottom: "0" }
                : {}
            }
            className="reservation-card__subtitle"
          >
            {car.carBrand.name + " " + car.name}
          </h3>
          {localStorage.getItem("role") === "customer" ? (
            <CarPartnerItem partner={partner} />
          ) : null}
        </div>
        <div className="reservation-card__options">
          {status === "pending" ? (
            <>
              <button
                className="reservation-card__btn reservation-card__btn--accept btn"
                onClick={() => {
                  updateReservationStatus(id, 3, car.id);
                }}
              >
                Akzeptieren
              </button>
              <button
                className="reservation-card__btn reservation-card__btn--cancel btn"
                onClick={() => {
                  updateReservationStatus(id, 2, car.id);
                }}
              >
                Stornieren
              </button>
            </>
          ) : (
            <>
              {localStorage.getItem("role") === "partner" && !back ? (
                <>
                  {contract != null ? (
                    <button
                      style={{ marginRight: "1.5rem" }}
                      className="reservation-card__btn btn--filled btn"
                      onClick={() => {
                        setIsOpen(true);
                        setFormType("protocol");
                      }}
                    >
                      Rücknahme erstellen
                    </button>
                  ) : null}
                  <button
                    style={{ marginRight: "1.5rem" }}
                    className="reservation-card__btn btn--filled btn"
                    onClick={() => {
                      setIsOpen(true);
                      setFormType("contract");
                    }}
                  >
                    Mietvertrag erstellen
                  </button>
                </>
              ) : null}
              {localStorage.getItem("role") === "customer" || back ? (
                <button
                  style={{ marginRight: "1.5rem" }}
                  className={`reservation-card__btn ${
                    backProtocol != null
                      ? "btn--filled"
                      : "reservation-card__btn--download"
                  } btn`}
                  onClick={() => downloadPdf("protocol")}
                >
                  Rücknahme herunterladen
                </button>
              ) : null}
              {!back ? (
                <button
                  className={`reservation-card__btn ${
                    contract != null
                      ? "btn--filled"
                      : "reservation-card__btn--download"
                  } btn`}
                  onClick={() => downloadPdf("contract")}
                >
                  Mietvertrag herunterladen
                </button>
              ) : null}
            </>
          )}
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`${
          formType === "contract"
            ? "Mietvertrag erstellen"
            : "Rücknahmeprotokoll erstellen"
        }`}
      >
        {formType === "contract" ? (
          <ContractForm reservation={reservation} />
        ) : (
          <ProtocolForm reservation={reservation} />
        )}
      </Modal>
    </>
  );
};

export default ReservationCard;
