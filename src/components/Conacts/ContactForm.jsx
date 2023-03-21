import React, { Component } from "react";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number: Number.parseInt(this.state.number)
    }
    console.log(contact)

    this.props.onAddContact(contact);

    this.setState({
      name: '',
      number: ''
    })
  }

  handleImputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {return (
    <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            value={this.state.name}
            onChange={this.handleImputChange}
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
            value={this.state.number}
            onChange={this.handleImputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  )}
  
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}