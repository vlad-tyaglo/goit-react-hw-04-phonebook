import React, { useState } from "react";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const ContactForm = ({onAddContact}) => {
  const [contact, setContact] = useState({name: '', number: ''});

  const handleSubmit = event => {
    event.preventDefault();

    onAddContact(contact);
        setContact(
          {
            name: '',
            number: '',
        })
  }

  const handleImputChange = (event) => {
    setContact({
      ...contact,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            value={contact.name}
            onChange={handleImputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          NUMBER
          <Input
            type="tel"
            value={contact.number}
            onChange={handleImputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  )
  
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}

export default ContactForm;