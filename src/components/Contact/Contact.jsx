import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.twoIconsWrapper}>
        <div className={css.iconsWrapper}>
          <IoPersonSharp />
          <p>{data.name}</p>
        </div>
        <div className={css.iconsWrapper}>
          <BsFillTelephoneFill />
          <p>{data.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => onDelete(data.id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
