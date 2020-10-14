import React from 'react';
import Contact from './components/Contact.js';
import './components/Contact.css';
import ContactList from './components/ContactList.js';

const person1 = {
  Isconnected: true,
  name: 'Paula Simpson',
  avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
};

const person2 = {
  Isconnected: false,
  name: 'Phyllis Ellis',
  avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
};
const person3 = {
  Isconnected: true,
  name: 'Wallace Murray',
  avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
};

function App() {
  return (
    <div className="App">
      <Contact {...person1} />
      <Contact {...person2} />
      <Contact {...person3} />
      -------------------------
      <ContactList />
    </div>
  );
}

export default App;
