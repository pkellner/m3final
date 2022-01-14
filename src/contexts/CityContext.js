import React, { createContext, useState } from "react";

export const CityContext = createContext();

function CityProvider({ children }) {
  const [cityMax, setCityMax] = useState(3);
  const [selectedCityId, setSelectedCityId] = useState();
  const [searchText, setSearchText] = useState();

  const contextValue = {
    cityMax,
    setCityMax,
    selectedCityId,
    setSelectedCityId,
    searchText,
    setSearchText,
  };

  return (
    <CityContext.Provider value={contextValue}>{children}</CityContext.Provider>
  );
}

export { CityProvider };
