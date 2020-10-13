import React from "react";

let Isconnected = true;

const Contact = () => {
  return (
    <div className="Contact">
      <img
        src="https://randomuser.me/api/portraits/women/32.jpg"
        alt="C'est Paula Simpson"
        className="avatar"
      ></img>
      <div>
        <p className="name">C'est Paula Simpson</p>

        <div className="status">
          <status className="status-online"></status>
          <p className="status-text">{Isconnected ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
