import PropTypes from 'prop-types';

import styles from './contactList.module.scss';

const ContactsList = ({ items, deleteContack }) => {
  const contacts = items.map(({ id, name, number, deleteContack }) => (
    <li key={id}>
      {name}: {number}
      <button id={id} onClick={() => deleteContack(id)}>
        Delete
      </button>
    </li>
  ));

  return <ol>{contacts}</ol>;
};

export default ContactsList;

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
    items: PropTypes.shape({
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number:PropTypes.string.isRequired}),
deleteContack: PropTypes.func.isRequired,

}