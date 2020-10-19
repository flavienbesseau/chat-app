import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img
          src={this.props.avatar}
          alt={this.props.name}
          className="avatar"
        ></img>
        <div>
          <p className="name">{this.props.name}</p>

          <div
            className="status"
            onClick={(event) => {
              this.setState({ online: !this.state.online });
            }}
          >
            <i
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></i>
            <p className="status-text">
              {this.state.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Contact;
