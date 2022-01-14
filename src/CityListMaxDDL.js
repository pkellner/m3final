import { useContext } from "react";
import { CityContext } from "./contexts/CityContext";

export default function CityListMaxDDL() {
  const { cityMax, setCityMax, setSelectedCityId } = useContext(CityContext);
  const cityCountChoices = [3, 5, 10];

  return (
    <div>
      <select
        name="select"
        className="custom-select"
        onChange={(e) => {
          setCityMax(e.target.value);
          setSelectedCityId(undefined);
        }}
        defaultValue={cityMax.toString()}
      >
        {cityCountChoices.map(function (rec) {
          return (
            <option key={rec} value={rec} defaultValue={cityMax}>
              Show Top {rec} cities
            </option>
          );
        })}
      </select>
    </div>
  );
}
