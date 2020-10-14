import React from 'react';

const users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    online: false,
  },
  {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    online: true,
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    online: true,
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false,
  },
  {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    online: true,
  },
];

const ContactList = () => {
  return (
    <div>
      {users.map((member) => (
        <div key={member} className="Contact">
          <img src={member.avatar} alt={member.name} className="avatar" />
          <div>
            <p className="name">{member.name}</p>
            <div className="status">
              <i
                className={member.online ? 'status-online' : 'status-offline'}
              ></i>
              <p className="status-text">
                {member.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
