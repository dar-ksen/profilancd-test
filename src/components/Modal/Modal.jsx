import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ title, content, actions, onClose, Tag = "div", onSubmit }) => {
  useEffect(() => {
    const onEscClick = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEscClick);
    return () => window.removeEventListener("keydown", onEscClick);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal" onMouseDown={onClose}>
      <Tag
        className="modal__dialog"
        onMouseDown={(e) => e.stopPropagation()}
        onSubmit={onSubmit}
      >
        <div className="modal__content">
          <div className="modal__header">
            <h5 className="modal__title">{title}</h5>
            <button
              type="button"
              onClick={onClose}
              className="modal__close"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal__body">{content}</div>
          <div className="modal__footer">{actions}</div>
        </div>
      </Tag>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
