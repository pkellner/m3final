import citiesData from "../../data/cities.json";

export default async function handler(req, res) {
  function runDelayMiddleware(req, res) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  await runDelayMiddleware(req, res);
  {
    let count = 5;
    if (req?.query?.displayCount) {
      count = parseInt(req.query.displayCount);
    }

    const resultData = citiesData
      .map(({ id, city, state, population }) => {
        return {
          id,
          city,
          state,
          population,
        };
      })
      .slice(0, count)
      .sort((a, b) => {
        const aPopulation = parseInt(a.population);
        const bPopulation = parseInt(b.population);
        if (aPopulation > bPopulation) return -1;
        if (aPopulation < bPopulation) return 1;
        return 0;
      });

    res.status(200).json(JSON.stringify(resultData, null, "\t"));
  }
}
