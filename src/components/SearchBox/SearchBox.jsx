import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div className={css.input}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search contact..."
      />
    </div>
  );
};

export default SearchBox;
