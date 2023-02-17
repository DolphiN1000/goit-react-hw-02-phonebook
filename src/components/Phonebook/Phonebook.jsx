import { Component } from "react";
import { nanoid } from "nanoid";

import ContactsList from "./ContactList/ContactList";

class Phonebook extends Component {
    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
      }

      deleteContack(id){
        this.setState(({items}) => {
          const newContacts = items.filter(item => item.id !== id);
          return {items:newContacts}
        })

      }

      render() {return(
        <div>
            <h1>Phonebook</h1>
            <p>Name</p>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button>Add contact</button>
<div>
    <h2>Contacts</h2>
  <ContactsList items={this.state.contacts} deleteContack={this.deleteContack}/>
</div>
        </div>
      )}
}

export default Phonebook;