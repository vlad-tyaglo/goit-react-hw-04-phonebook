import { ContactForm } from "./Conacts/ContactForm";
import React from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends React.Component {

  state = {
    contacts: [      
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }


  onAddContact = (contact) => {
    const finalContact = {
      id: Math.random()* 100,
      ...contact
    };

    const isExist = this.state.contacts.find(({name}) => name.toLowerCase() === contact.name.toLowerCase());

    if (isExist) {
      return alert(`${contact.name} is already in contacts.`)
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, finalContact]
    }))
  }

  onFilterChange = (e) => {
    let contactToFind = e.target.value.trim();

    this.setState(prevState => ({
      filter: contactToFind,
    }));
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }


  componentDidMount(){
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if(savedContacts) {
      this.setState({
        contacts: savedContacts,
      })
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  getFilteredContacts = () => {
    const {filter} = this.state;
    const normalisedFilter = filter.toLowerCase();
    return this.state.contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
  }

  render (){
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={this.state.filter}></Filter>
        <ContactsList 
        contacts={this.state.contacts}
        deleteContact={this.deleteContact}
        getFilteredContacts={this.getFilteredContacts}
        ></ContactsList>
      </div>
    );
  }
};
