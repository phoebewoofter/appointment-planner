import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({ contactList, handleAddContact }) => {
 
  const [currentName, setCurrentName] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

   useEffect(() => {
    for (let i = 0; i < contactList.length; i++) {
      if (contactList[i].name.includes(currentName.trim().toLowerCase())) {
        setIsDuplicate(true);
      }
    }
  }, [currentName, contactList]);

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!isDuplicate) {
    handleAddContact(currentName, currentNumber, currentEmail);

    setCurrentName('');
    setCurrentEmail('');
    setCurrentNumber('');

    window.alert('Contact successfully submitted');
   } else {
    window.alert('Name is already in contacts');
   }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} name={currentName} setName={setCurrentName} email={currentEmail} setEmail={setCurrentEmail} phone={currentNumber} setPhone={setCurrentNumber}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contactList}/>
      </section>
    </div>
  );
};
