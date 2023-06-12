import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import { Component } from "react";


class ContactForm extends Component {
state = {
  contacts: [],
  name: '',
  number: ''
}

handleChange = (e) => {
    const { name, value} = e.currentTarget;
    this.setState({ [name]: value, })
    // console.log(e.currentTarget.value)
}
handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: '',
        });
    }
    
byInputNameId = nanoid();
byInputNumberId =  nanoid();
    
reset = () => {
    this.setState({ name: ' ', number: ' ' })
    };
    

    render() {
        const { name, number } = this.state;
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.inputNameId}>
                    Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                        id={this.byInputNameId}
                    />   
                    </label>
                    
                    <label htmlFor={this.byInputNumberId}>
                    Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                        id={this.byInputNumberId}
                        />
                    </label>

                <button className={css.button} type="submit">Add contact</button>
            </form>
            </div>
        )
    }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;