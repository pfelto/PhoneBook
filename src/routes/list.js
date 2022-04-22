import React, { useState, useEffect } from "react";

const Contact = (props) => (
  <tr>
    <td>{props.contact.number}</td>
    <td>{props.contact.name}</td>
  </tr>
);

const List = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch("phonebook2.json");

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setContacts(records.phonebook);
    }
    getRecords();
    return;
  }, [contacts.length]);

  const contactList = () => {
    return contacts.map((contact) => {
      return <Contact contact={contact} key={contact.id} />;
    });
  };

  return (
    <div>
      <h1>Phone Book List</h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>{contactList()}</tbody>
      </table>
    </div>
  );
};

export default List;
