const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather icon"
        className="mx-auto"
      />
      <p className="text-4xl">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
