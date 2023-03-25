import  ContactForm  from "./Conacts/ContactForm";
import React, {useState, useEffect} from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const [filter, setFilter] = useState('');

  const onAddContact = (contact) => {
    const finalContact = {
      id: Math.random()* 100,
      ...contact
    };

    const isExist = contacts.find(({name}) => name.toLowerCase() === contact.name.toLowerCase());

    if (isExist) {
      return alert(`${contact.name} is already in contacts.`)
    }

    setContacts(prevState => ([...prevState, finalContact]))
  };

  const onFilterChange = (e) => {
    let contactToFind = e.target.value.trim();

    setFilter(contactToFind);
  };

  const deleteContact = (contactId) => {
      setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)))
  };

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
  }
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter onChange={onFilterChange} value={filter}></Filter>
        <ContactsList 
        contacts={contacts}
        deleteContact={deleteContact}
        getFilteredContacts={getFilteredContacts}
        ></ContactsList>
      </div>
    );
};

export default App;