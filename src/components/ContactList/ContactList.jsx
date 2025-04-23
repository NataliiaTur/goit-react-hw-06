import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import dataContacts from "../../helpers/dataContacts.json";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
