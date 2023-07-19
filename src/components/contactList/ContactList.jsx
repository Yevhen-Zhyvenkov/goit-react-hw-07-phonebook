import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  //console.log(filterContacts);
  const dispatch = useDispatch();

  const visibleContacts = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts)
    ),
  ];

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.buttons}
            value={id}
            onClick={() => dispatch(deleteContact(id))}
            type="button">Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
    


































// import PropTypes from 'prop-types';
// import css from './ContactList.module.css'

// const ContactList = ({ contacts, onDeleteContact }) => (
//     <ul className={css.list}>
//         {contacts.map(({ id, name, number }) => (
//             <li className={css.item} key={id}>
//                 <p>{name}</p>
//                 <p>: {number}</p>
//                 <button className={css.buttons} onClick={() => onDeleteContact(id)}>Delete</button>
//             </li>))}
//     </ul>);

// ContactList.propTypes = {
// contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     )
// };
    
// export default ContactList;