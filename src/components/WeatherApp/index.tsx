import { useEffect, useState } from "react";
import { Search } from "./Search";

import "./styles.css";
import { IWeatherData } from "../../interfaces/IWeather";

export const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<null | IWeatherData>(null);

  const fetchData = async (param: string) => {
    setErrorMsg(() => null);
    setLoading(() => true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );

      const data = (await response.json()) as IWeatherData;

      console.log("DATA: ", data);

      if (data && data.cod === 200) {
        setLoading(() => false);
        setWeatherData(() => data);
      }

      if (data && data.cod === "404") {
        setLoading(() => false);

        if ("message" in data) {
          setErrorMsg(() => data.message as string);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMsg(() => error?.message);
      setLoading(() => false);
    }
  };

  const handleSearch = () => {
    fetchData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  useEffect(() => {
    fetchData("Wolverhampton");
  }, []);

  return (
    <div className="weather-app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : errorMsg ? (
        <div>Encountered an error: {errorMsg}</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather
              ? weatherData.weather[0].description
              : null}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
