import { Component } from "react";
import { nanoid } from "nanoid";

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

      render() {return(
        <div>
            <h3>Phonebook</h3>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<div>
    <h3>Contacts</h3>
    <ol>
        <li></li>
    </ol>
</div>
        </div>
      )}
}

export default Phonebook;