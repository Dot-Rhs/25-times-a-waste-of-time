import { FC } from "react";
import "./styles.css";

interface IProps {
  id?: string;
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
  closeModal: () => void;
}

export const Modal = ({
  id,
  header = "header",
  body = <div>A BODY</div>,
  footer = <div>A FOOTER</div>,
  closeModal
}: IProps) => {
  return (
    <div id={id ?? "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={closeModal}>
            &times;
          </span>
          <h2>{header}</h2>
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
};
