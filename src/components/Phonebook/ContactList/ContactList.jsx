import PropTypes from 'prop-types';

import styles from './contactList.module.scss';

const ContactsList = ({ contacts, deleteContact }) => {
  const contactsList = contacts.map(({ id, name, number}) => (
    <li key={id}>
      {name}: {number}
      <button id={id} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return <ol>{contactsList}</ol>;
};

export default ContactsList;

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired
}
