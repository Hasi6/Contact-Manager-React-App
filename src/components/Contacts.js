import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Hasi",
        email: "hasi@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Tiro",
        email: "tiro@gmail.com",
        phone: "333-333-333"
      },
      {
        id: 3,
        name: "Hasitha",
        email: "hasitha@gmail.com",
        phone: "111-111-111"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => {
      return contact.id != id;
    });

    this.setState({
      contacts: [...newContacts]
    })
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
export default Contacts;
