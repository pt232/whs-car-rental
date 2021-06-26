import React, { useState, useContext } from "react";
import { saveAs } from "file-saver";
import { bufferToBlob } from "../../../utils/helpers";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import Modal from "../../modal/Modal";
import ContractForm from "../../form/contract/ContractForm";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./ReservationCard.css";

const ReservationCard = ({ reservation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateReservationStatus } = useContext(ReservationContext);
  const { id, status, car, partner, contract } = reservation;

  const downloadPdf = () => {
    if (contract == null) return;
    const pdfBlob = bufferToBlob(contract, "application/pdf");
    saveAs(pdfBlob, "Mietvertrag.pdf");
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
              {localStorage.getItem("role") === "partner" ? (
                <button
                  style={{ marginRight: "1.5rem" }}
                  className="reservation-card__btn btn--filled btn"
                  onClick={() => setIsOpen(true)}
                >
                  Mietvertrag erstellen
                </button>
              ) : null}
              <button
                className={`reservation-card__btn ${
                  contract != null
                    ? "btn--filled"
                    : "reservation-card__btn--download"
                } btn`}
                onClick={() => downloadPdf()}
              >
                Mietvertrag herunterladen
              </button>
            </>
          )}
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Mietvertrag erstellen"
      >
        <ContractForm reservation={reservation} />
      </Modal>
    </>
  );
};

export default ReservationCard;
