import {CityContext} from "./contexts/CityContext";
import {useContext, useId} from "react";

export function SearchBar() {
  
  const uniqueId = useId();
  const controlId = `idInput${uniqueId}`;
  
  const { searchText, setSearchText } = useContext(CityContext);
  
  return (
    <form>

      <label htmlFor={controlId}>Search Name:</label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          name="search"
          id={controlId}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-info">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

    </form>
  );
}
