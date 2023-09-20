import React from "react";
import { useState } from 'react'
import ContactList from "./ContactList";

import '../App.css'

export default function SelectedContact() { 

const [SelectedContactId, setSelectedContactId] = useState(null)
const selectedContactId = contact.find((contact) => contact.id === SelectedContactId)

  console.log("Featured Contact: ", selectedContactId)
  console.log("Contact List: ", ContactList)

}