import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.input}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contact..."
      />
    </div>
  );
};

export default SearchBox;
