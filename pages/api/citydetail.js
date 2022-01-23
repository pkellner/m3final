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

    function getCityDetails() {
      return cityDetails;
    }

    const resultData = getCityDetails()
      .filter((rec) => rec.id == cityId)
      .map(
        ({
          id,
          city,
          state,
          population,
          temperature,
          airQualityPPM,
        }) => {
          return {
            id,
            city,
            state,
            population,
            temperature,
            airQualityPPM,
          };
        },
      );

    if (resultData.length > 0) {
      res.status(200).json(JSON.stringify(resultData[0], null, '\t'));
    } else {
      res.status(404).send('record not found');
    }
  }
}

const cityDetails = [
  {
    id: 4,
    city: 'New York',
    state: 'New York',
    population: '8405837',
    temperature: 43,
    airQualityPPM: 24,
  },
  {
    id: 5,
    city: 'Los Angeles',
    state: 'California',
    population: '3884307',
    temperature: 58,
    airQualityPPM: 63,
  },
  {
    id: 6,
    city: 'Chicago',
    state: 'Illinois',
    population: '2718782',
    temperature: 58,
    airQualityPPM: 60,
  },
  {
    id: 7,
    city: 'Houston',
    state: 'Texas',
    population: '2195914',
    temperature: 80,
    airQualityPPM: 3,
  },
  {
    id: 8,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    population: '1553165',
    temperature: 43,
    airQualityPPM: 18,
  },
  {
    id: 9,
    city: 'Phoenix',
    state: 'Arizona',
    population: '1513367',
    temperature: 79,
    airQualityPPM: 63,
  },
  {
    id: 1,
    city: 'San Antonio',
    state: 'Texas',
    population: '1409019',
    temperature: 82,
    airQualityPPM: 36,
  },
  {
    id: 10,
    city: 'San Diego',
    state: 'California',
    population: '1355896',
    temperature: 67,
    airQualityPPM: 69,
  },
  {
    id: 11,
    city: 'Dallas',
    state: 'Texas',
    population: '1257676',
    temperature: 77,
    airQualityPPM: 30,
  },
  {
    id: 12,
    city: 'San Jose',
    state: 'California',
    population: '998537',
    temperature: 80,
    airQualityPPM: 3,
  },
];
