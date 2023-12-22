import React, { useState } from "react";
import "../styles/Modal.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ onClose }) => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="modal">
      <div className="close" onClick={() => onClose()}>
        <CloseIcon />
      </div>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <PersonIcon className="icons" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <EmailIcon className="icons" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <LockIcon className="icons" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Modal;
