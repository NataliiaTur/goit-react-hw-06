import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import dataContacts from "../../helpers/dataContacts.json";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
