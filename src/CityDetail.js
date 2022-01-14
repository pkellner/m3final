import useSwr from "swr";
import { fetcher } from "./fetcher";

export default function CityDetail({ cityId }) {
  const { data } = useSwr(`/api/citydetail?cityId=${cityId}`, fetcher, {
    suspense: true,
  });

  return (
    <>
      <hr />
      <div>
        <b>
          {data.city}, {data.state} Temperature:{data.temperature} Air Quality:{" "}
          {data.airQualityPPM}
        </b>
      </div>
    </>
  );
}
