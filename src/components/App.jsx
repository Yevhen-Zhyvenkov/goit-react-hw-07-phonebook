import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Section } from './Section/Section';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </div>
  );
};



// import { ContactForm }  from "./contactForm/ContactForm";
// import {Filter}  from "./filter/Filter";
// import { ContactList } from "./contactList/ContactList"
// import { Section } from "./Section/Section";
// import css from './App.module.css'



// export const App = () => {

//   return (
//     <div className={css.container}>
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <ContactList />
//       </Section>
//     </div>
//   );
// };



// export default App;
















