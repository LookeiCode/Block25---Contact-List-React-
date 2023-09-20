import React from "react";
import { useState } from 'react'
import ContactList from "./ContactList";
import App from '../App'

export default function SelectedContact() { 

const SelectedContact = ({ selectedContact }) => {
  return (
    <>
      <h1>{selectedContact.name}</h1>
      <h2>whatever else about this contact</h2>
    </>
  );
};

  // console.log("Featured Contact: ", selectedContact)
  // console.log("Contact List: ", ContactList)

}