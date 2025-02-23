import React from 'react';
import ContactCard from "./ContactCard";
// props is a parameter to access the property contacts
const ContactList = (props) => {
  console.log(props);

  // to render the list, do this
  const renderContactList = props.contacts.map((contact) => {
    //  it return the JSX element
    return (
      <ContactCard contact={contact}></ContactCard>
    );
  });               // .map() is js array method used to iterate over each element
  return (
    <div className="ui celled list">{renderContactList}</div> 
  );
};

export default ContactList;