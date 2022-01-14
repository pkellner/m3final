import useSwr from "swr";
import { fetcher } from "./fetcher";

export default function CityDetail({ cityId }) {
  const { data } = useSwr(`/api/citydetail?cityId=${cityId}`, fetcher, {
    suspense: true,
  });

  return (
    <>
      <hr />
      <div className="city-details">
        <h4>{data.city} {data.state}</h4> 
        <span>Temperature: {data.temperature}</span> 
        <span>Air Quality:{" "} {data.airQualityPPM}</span>
      </div>
    </>
  );
}
