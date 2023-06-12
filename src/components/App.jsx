import { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList"
import css from './App.module.css'



export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  addContact = ({ name, number }) => {
  const contact = {
  id: nanoid(),
  name,
  number,
    };
  const lowerCaseName = name.toLowerCase();

  this.state.contacts.some(
    contact =>
      (contact.name.toLowerCase() === lowerCaseName && contact.number === number) || contact.number === number || contact.name.toLowerCase() === lowerCaseName)

  ?  Notify.warning('Такий контакт вже присутній у телефонній книзі!')
 
  : this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts],
  }))
  };
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  

  render() {
  const { filter } = this.state;
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />  
      <h2 className={css.title}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={this.visibleContacts()}
          onDeleteContact={this.deleteContact}/>
      </div>
    
    )
  }
  
};

Notify.init({
width: '300px',
fontSize: '15px',
position: 'rigth-top',
closeButton: false,
});
