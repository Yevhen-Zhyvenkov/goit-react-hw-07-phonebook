import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList"
import css from './App.module.css'

const initializeContacts = () => {
  const localStoredContacts = localStorage.getItem('contacts');
  return localStoredContacts ? JSON.parse(localStoredContacts) : [];
};


export const App = () => {
  const [contacts, setContacts] = useState(() => initializeContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

  const lowerCaseName = name.toLowerCase();
    contacts.some(
      (contact) =>
        (contact.name.toLowerCase() === lowerCaseName &&
        contact.number === number) ||
        contact.number === number ||
        contact.name.toLowerCase() === lowerCaseName)
        ? Notify.warning('Такий контакт вже присутній у телефонній книзі!')
        :setContacts((prevContacts) => [contact, ...prevContacts]);};

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

Notify.init({
  width: '300px',
  fontSize: '15px',
  position: 'right-top',
  closeButton: false,
});

export default App;





//OLD
// export class App extends Component {
//  state = {
//   contacts: [],
//   filter: '',
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const contactsByParsed = JSON.parse(contacts);
//     if (contactsByParsed) {
//       this.setState({ contacts: contactsByParsed });
//     }    
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//       // console.log(prevState.contacts)
//       // console.log(this.state.contacts)
//     }
    
//   }

//   addContact = ({ name, number }) => {
//   const contact = {
//   id: nanoid(),
//   name,
//   number,
//     };
//   const lowerCaseName = name.toLowerCase();

//   this.state.contacts.some(
//     contact =>
//       (contact.name.toLowerCase() === lowerCaseName && contact.number === number) || contact.number === number || contact.name.toLowerCase() === lowerCaseName)

//   ?  Notify.warning('Такий контакт вже присутній у телефонній книзі!')
 
//   : this.setState(prevState => ({
//     contacts: [contact, ...prevState.contacts],
//   }))
//   };
//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }))
//   };

//   changeFilter = (event) => {
//     this.setState({ filter: event.currentTarget.value })
//   };
//   visibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
  

//   render() {
//   const { filter } = this.state;
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />  
//       <h2 className={css.title}>Contacts</h2>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList contacts={this.visibleContacts()}
//           onDeleteContact={this.deleteContact}/>
//       </div>
    
//     )
//   }
  
// };

// Notify.init({
// width: '300px',
// fontSize: '15px',
// position: 'rigth-top',
// closeButton: false,
// });
