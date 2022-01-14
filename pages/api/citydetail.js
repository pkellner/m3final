import cityDetails from "../../data/cityDetails.json";
//import detail from "../../data/historicalData.json";

export default async function handler(req, res) {
  function runDelayMiddleware(req, res) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  await runDelayMiddleware(req, res);
  {
    let cityId = -1;
    if (req?.query?.cityId) {
      cityId = parseInt(req.query.cityId);
    }

    // const xx = detail.map((rec) => {
    //   return {
    //     id: rec.id,
    //     city: rec.city,
    //     state: rec.state,
    //     population: rec.population,
    //     temperature: rec.sensors[0].temperature,
    //     airQualityPPM: rec.sensors[0].pm25,
    //   };
    // });
    // const str = JSON.stringify(xx);
    // console.log(str);
    
    const resultData = cityDetails
      .filter((rec) => rec.id == cityId)
      .map(({ id, city, state, population, temperature, airQualityPPM }) => {
        return {
          id,
          city,
          state,
          population,
          temperature,
          airQualityPPM,
        };
      });

    if (resultData.length > 0) {
      res.status(200).json(JSON.stringify(resultData[0], null, "\t"));
    } else {
      res.status(404).send("record not found");
    }
  }
}
