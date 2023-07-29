import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
        contact.phone === number) ||
        contact.phone === number ||
        contact.name.toLowerCase() === lowerCaseName
    );
     isContactExist
      ? Notify.warning(
          `Contact with that ${name} or ${number} is already present in the phone book.`
        )
      : dispatch(addContact({ name: name, phone: number }));

    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Z\s]+$"
            title="Enter last name or first name or both last name and first name"
            required
            value={contacts.name}
          />
        </label>
        <label>
          <input className={css.input}
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="^-?(?:\d+(?:[.,]\d+)?(?:-|$))+$" 
            title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
            required
            value={contacts.number}
          />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
    </div>
  );
};

  Notify.init({
  width: '300px',
  fontSize: '15px',
  position: 'right-top',
  closeButton: false,
});














// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/contactsSlice';
// import { nanoid } from '@reduxjs/toolkit';
// import { Notify } from "notiflix";
// import css from "./ContactForm.module.css"


// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
   
//     const lowerCaseName = name.toLowerCase();

//     const isContactExist = contacts.some(
//       contact =>
//         (contact.name.toLowerCase() === lowerCaseName &&
//           contact.number === number) ||
//         contact.number === number ||
//         contact.name.toLowerCase() === lowerCaseName
//     );

//     isContactExist
//       ? Notify.warning(
//           `Contact with that ${name} or ${number} is already present in the phone book.`
//         )
//       : dispatch(addContact(name, number));

//     form.reset();
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
//                         value={contacts.name}
                      
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
//                         value={contacts.number}
                        
//                         id={byInputNumberId}
//                         />
//                     </label>

//                 <button className={css.button} type="submit">Add contact</button>
//             </form>
//             </div>
//         )
//     }

// Notify.init({
//   width: '300px',
//   fontSize: '15px',
//   position: 'right-top',
//   closeButton: false,
// });






















