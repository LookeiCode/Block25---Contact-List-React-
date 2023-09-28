import React from "react";

const SelectedContact = ({selectedContact}) => { 

  return (
    <>
      <h1>{selectedContact.name}</h1>
      <h2>whatever else about this contact</h2>
    </>
  );
};
  // console.log("Featured Contact: ", selectedContact)
  // console.log("Contact List: ", ContactList)

  export default SelectedContact;