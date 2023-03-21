import { ListContacts, ContactInfo, List } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactsList = ({deleteContact, getFilteredContacts}) => {
    const filteredContacts = getFilteredContacts();
    return (
        <List>{filteredContacts.map(({ id, name, number }) => (
            <ListContacts key={id}>
                <ContactInfo>{name}: {number}</ContactInfo>
                <button type="button" onClick={() => {deleteContact(id)}}>Delete</button>
            </ListContacts>))}
        </List>
    )
}

ContactsList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    getFilteredContacts: PropTypes.func.isRequired,
  }