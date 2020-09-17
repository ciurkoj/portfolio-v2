import React from "react";

const Modal = (props) => {
  return (
    <div
      className={"modal-wrapper"}
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "3",
      }}
    >
      <div
        onClick={props.onCancel}
        className={"modal-backdrop"}
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "1",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />
      <div
        className={"modal-box"}
        style={{
          color: "aliceblue",
          position: "absolute",
          marginRight: "auto",
          marginLeft: "auto",
          zIndex: "1",
          //   minHeight: "30%",
          width: "60%",
          overflowY: "auto",
          backgroundColor: "rgb(54 64 78)",
          boxShadow: "0 0 10px rgba(0,0,0,0.25",
          padding: "40px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",
          "@media (max-width:600px)": {},
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
