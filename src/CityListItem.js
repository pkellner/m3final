import {useContext, useState, useTransition} from "react";
import { CityContext } from "./contexts/CityContext";

export default function CityListItem({ id, city, population }) {
  const { selectedCityId, setSelectedCityId } = useContext(CityContext);
  const [tempId, setTempId] = useState();
  const [isPending, startTransition] = useTransition();
  
  //console.log(`CityListItem: id:${id} isPending:${isPending ? "true" : "false"} tempId:${tempId}  selectedCityId:${selectedCityId}   ${Math.random().toString(36).slice(2)} `);
  
  return (
    <li
      className="list-group-item list-group-item-city-list-height mt-1 mb-1 bg-light"
      onClick={() => {
        setTempId(id);
        startTransition(() => {
          setSelectedCityId(id);
        });
      }}
    >
      {city}
      <br />
      &nbsp;&nbsp;&nbsp;Population:{" "}
      {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      <br/> {isPending && tempId === id ? <i className="fas fa-spinner fa-spin fa-2x" aria-hidden="true"></i> : null}
    </li>
  );
}
