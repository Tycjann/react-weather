import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import React, { useCallback, useState } from 'react';

const WeatherBox = props => {

  const [weather, setWeather] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  // console.log(weather);

  const handleCityChange = useCallback(({ city }) => {
    const API_KEY = '0fe6fae8a444b250e083a71e3a30b4a9';
    setFetching(true);

    // const handleError = response => {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   } else {
    //     return response.json();
    //   }
    // }; //handler function that throws any encountered error
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    //   .then(handleError) // skips to .catch if error is thrown
    //   .then(data => console.log("Does something with data"))
    //   .catch(console.log); // catches the error and logs it

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (response.status === 200) {
          // OK
          return response.json()
          .then(data => {
            const weatherData = {
              city: data.name,
              temp: data.main.temp,
              icon: data.weather[0].icon,
              description: data.weather[0].main
            };
            setWeather(weatherData);
            setFetching(false);
            setError(false);
            // console.log(weatherData);
          });
        }
        else { setError(true); }
      });
      
      
      

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {(weather && !fetching && !error) && <WeatherSummary {...weather} />}
      {(fetching && ! error) && <Loader />}
      {error && <ErrorBox children={'There is no such city!'} />}
    </section>
  )
};

export default WeatherBox;