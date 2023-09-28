import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'


export default function App() {

  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <>
        <div>Selected Contact View</div>
            <SelectedContact selectedContact={selectedContactId} />
          </>
          ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

/*

const sup = "sup man"

// const yo = (sup) => {
//   const num1 = 1
//   const num2 = 2
//   const answer = num1 + num2
//   return answer
// }
// console.log(<yo />);

*/