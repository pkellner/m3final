import {CityContext} from "./contexts/CityContext";
import {useContext, useId} from "react";

export function SearchBar() {
  
  const uniqueId = useId();
  const controlId = `idInput${uniqueId}`;
  
  const { searchText, setSearchText } = useContext(CityContext);
  
  return (
    <form>
      <label htmlFor={controlId}>Search Name:&nbsp;&nbsp;</label>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        id={controlId}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}
