import styles from './contactList.module.scss';

const ContactsList = ({items, deleteContack}) => {
 const contacts = items.map(({id, name, number, deleteContack}) => <li key={id}>{name}: {number}<button id={id} onClick={() => deleteContack(id)}>Delete</button></li> );

 return (
    <ol>
        {contacts}
    </ol>
 )
}

export default ContactsList;

ContactsList.defaultProps = {
    items: [],
}