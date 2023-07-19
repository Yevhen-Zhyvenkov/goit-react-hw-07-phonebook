import { ContactForm }  from "./contactForm/ContactForm";
import {Filter}  from "./filter/Filter";
import { ContactList } from "./contactList/ContactList"
import { Section } from "./Section/Section";
import css from './App.module.css'



export const App = () => {

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};



export default App;




















// import { useState, useEffect } from "react";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { nanoid } from 'nanoid'
// import ContactForm from "./contactForm/ContactForm";
// import Filter from "./filter/Filter";
// import ContactList from "./contactList/ContactList"
// import css from './App.module.css'

// const initializeContacts = () => {
//   const localStoredContacts = localStorage.getItem('contacts');
//   return localStoredContacts ? JSON.parse(localStoredContacts) : [];
// };


// export const App = () => {
//   const [contacts, setContacts] = useState(() => initializeContacts());
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//   const lowerCaseName = name.toLowerCase();
//     contacts.some(
//       (contact) =>
//         (contact.name.toLowerCase() === lowerCaseName &&
//         contact.number === number) ||
//         contact.number === number ||
//         contact.name.toLowerCase() === lowerCaseName)
//         ? Notify.warning('Такий контакт вже присутній у телефонній книзі!')
//         :setContacts((prevContacts) => [contact, ...prevContacts]);};

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== contactId)
//     );
//   };

//   const changeFilter = (e) => {
//     setFilter(e.currentTarget.value);
//   };

//   const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2 className={css.title}>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={visibleContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// };

// Notify.init({
//   width: '300px',
//   fontSize: '15px',
//   position: 'right-top',
//   closeButton: false,
// });

// export default App;




