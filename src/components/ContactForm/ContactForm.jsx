import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  submit = this.props.submit;
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(10);
  numberInputId = nanoid(10);

  handleNameChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ name: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label htmlFor={this.numberInputId} className={css.label}>
          Number
        </label>
        <input
          className={css.input}
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNameChange}
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
