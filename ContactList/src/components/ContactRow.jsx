import React from "react";

export default function ContactRow({setSelectedContactId, contact}) {
console.log(contact);

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