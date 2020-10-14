import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar"></img>
      <div>
        <p className="name">{props.name}</p>

        <div className="status">
          <i className={props.online ? 'status-online' : 'status-offline'}></i>
          <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;
