import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from "notiflix";
import css from "./ContactForm.module.css"


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
   
    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
          contact.number === number) ||
        contact.number === number ||
        contact.name.toLowerCase() === lowerCaseName
    );

    isContactExist
      ? Notify.warning(
          `Contact with that ${name} or ${number} is already present in the phone book.`
        )
      : dispatch(addContact(name, number));

    form.reset();
  };

    
const byInputNameId = nanoid();
const byInputNumberId =  nanoid();
    
        return (
            <div >
                <form onSubmit={handleSubmit}>
                    <label htmlFor={byInputNameId}>
                    Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Z\s]+$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={contacts.name}
                      
                        id={byInputNameId}
                    />   
                    </label>
                    
                    <label htmlFor={byInputNumberId}>
                    Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="^-?(?:\d+(?:[.,]\d+)?(?:-|$))+$" 
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={contacts.number}
                        
                        id={byInputNumberId}
                        />
                    </label>

                <button className={css.button} type="submit">Add contact</button>
            </form>
            </div>
        )
    }

Notify.init({
  width: '300px',
  fontSize: '15px',
  position: 'right-top',
  closeButton: false,
});


























// import css from "./ContactForm.module.css"
// import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types';
// import { useState } from "react";

// const ContactForm = ({ onSubmit }) => {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

// const handleChange = (e) => {
//     const { name, value } = e.target;
//         switch (name) {
//     case 'name':
//         setName(value);
//         break;
//     case 'number':
//         setNumber(value);
//         break;
//     default:
//     return;
//     }
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     setName('');
//     setNumber('');
//   };
    
// const byInputNameId = nanoid();
// const byInputNumberId =  nanoid();
    
//         return (
//             <div >
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor={byInputNameId}>
//                     Name
//                     <input
//                         className={css.input}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Z\s]+$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={name}
//                         onChange={handleChange}
//                         id={byInputNameId}
//                     />   
//                     </label>
                    
//                     <label htmlFor={byInputNumberId}>
//                     Number
//                     <input
//                         className={css.input}
//                         type="tel"
//                         name="number"
//                         pattern="^-?(?:\d+(?:[.,]\d+)?(?:-|$))+$" 
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={number}
//                         onChange={handleChange}
//                         id={byInputNumberId}
//                         />
//                     </label>

//                 <button className={css.button} type="submit">Add contact</button>
//             </form>
//             </div>
//         )
//     }

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

// export default ContactForm;


