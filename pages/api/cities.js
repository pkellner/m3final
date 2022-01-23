export default async function handler(req, res) {
  function getCitiesData() {
    return citiesData;
  }

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

    const resultData = getCitiesData()
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

    res.status(200).json(JSON.stringify(resultData, null, '\t'));
  }
}

const citiesData = [
  {
    id: 4,
    city: 'New York',
    state: 'New York',
    population: '8405837',
  },
  {
    id: 5,
    city: 'Los Angeles',
    state: 'California',
    population: '3884307',
  },
  {
    id: 6,
    city: 'Chicago',
    state: 'Illinois',
    population: '2718782',
  },
  {
    id: 7,
    city: 'Houston',
    state: 'Texas',
    population: '2195914',
  },
  {
    id: 8,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    population: '1553165',
  },
  {
    id: 9,
    city: 'Phoenix',
    state: 'Arizona',
    population: '1513367',
  },
  {
    id: 1,
    city: 'San Antonio',
    state: 'Texas',
    population: '1409019',
  },
  {
    id: 10,
    city: 'San Diego',
    state: 'California',
    population: '1355896',
  },
  {
    id: 11,
    city: 'Dallas',
    state: 'Texas',
    population: '1257676',
  },
  {
    id: 3,
    city: 'San Francisco',
    state: 'California',
    population: '837442',
  },
];
