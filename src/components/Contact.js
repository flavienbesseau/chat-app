import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar"></img>
      <div>
        <p className="name">{props.name}</p>

        <div className="status">
          <i
            className={props.Isconnected ? 'status-online' : 'status-offline'}
          ></i>
          <p className="status-text">
            {props.Isconnected ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  Isconnected: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;
