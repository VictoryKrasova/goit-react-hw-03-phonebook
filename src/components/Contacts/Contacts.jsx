import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import ContactsList from '../Contacts/ContactsList/ContactsList'

const Contacts = ({ actualContacts, deleteContact }) => {
  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactsList}>
        {actualContacts.map(contact => (
          <ContactsList
            key={contact.id}
            contact={contact}
            onDelete={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  actualContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contacts;