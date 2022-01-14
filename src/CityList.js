import { useState, useTransition, Suspense, useContext } from "react";
import useSwr from "swr";
import { fetcher } from "./fetcher";
import { CityContext } from "./contexts/CityContext";
import CityListItem from "./CityListItem";

export const CityListFallback = ({ displayCount }) => {
  // https://ericsu.me/tech/2016/07/04/creating-image-placeholder.html
  return (
    <ul className="list-group">
      {Array(3)
        .fill(0)
        .map((rec, index) => {
          return (
            <li
              className="list-group-item list-group-item-city-list-height mb-4"
              key={index}
            >
              <div className="image-placeholder-citylist" />
            </li>
          );
        })}
    </ul>
  );
};

export default function CityList() {
  const fetcher = (url) => {
    return fetch(url).then((res) => res.json());
  };

  function RenderComponent() {
    const { cityMax, selectedCityId, setSelectedCityId, searchText } =
      useContext(CityContext);
    const { data } = useSwr(`/api/cities?displayCount=${cityMax}`, fetcher, {
      suspense: true,
    });

    //console.log(`CITYLIST: rendered      ${Math.random().toString(36).slice(2)}`);

    return (
      <ul className="list-group">
        {data
          .filter(
            (r) =>
              !searchText ||
              r.city.toLowerCase().startsWith(searchText.toLowerCase())
          )
          .map((rec) => {
            return (
              <CityListItem
                id={rec.id}
                city={rec.city}
                population={rec.population}
                key={rec.id}
              />
            );
          })}
      </ul>
    );
  }

  return (
    <Suspense fallback={<CityListFallback />}>
      <RenderComponent />
    </Suspense>
  );
}
