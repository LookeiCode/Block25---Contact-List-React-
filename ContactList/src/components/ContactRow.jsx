import React from "react";
import { useState } from 'react'
import SelectedContact from "./SelectedContact";

export default function ContactRow({setSelectedContactId, contact}) {
    return (
        <tr onClick={() => {
          setSelectedContactId(contact);
        }}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      );
}