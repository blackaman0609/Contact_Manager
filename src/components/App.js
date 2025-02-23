import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      "name": "Aman",
      "email": "aman@gmail.com",
    },
    {
      id: "2",
      "name": "Bibhash",
      "email": "bibhash@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />     {/* here contacts is the props that pass data from parent to child */}
    </div>
  );
}
export default App;
