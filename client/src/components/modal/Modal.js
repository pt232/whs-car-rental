import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = ({ title, open, onClose, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__header">
          <h4 className="modal__title">{title}</h4>
          <FontAwesomeIcon
            icon={faTimes}
            className="modal__icon"
            onClick={onClose}
          />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
