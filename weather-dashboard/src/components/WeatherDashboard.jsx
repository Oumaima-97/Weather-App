import { useState } from "react";
import SearchBar from "./SearchBar";  // Make sure you have this component
import WeatherCard from "./WeatherCard";  // Display weather details
import ErrorMessage from "./ErrorMessage";  // To show error messages
import { fetchWeather } from "../api/api";  // API call

const WeatherDashboard = () => {
  // Set up the necessary states
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);  // Error message state
  const [loading, setLoading] = useState(false);  // Loading state

  // Handle city search
  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);  // Reset any previous errors
    setWeatherData(null);  // Reset weather data before new fetch

    try {
      const data = await fetchWeather(city);  // Call the fetchWeather function
      if (data.cod !== 200) {
        throw new Error("City not found");  // Handle city not found
      }
      setWeatherData(data);  // Set the fetched weather data
    } catch (err) {
      setError("City not found or network issue");  // Show error message
    } finally {
      setLoading(false);  // End the loading state
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />  {/* Search Bar component */}

      {loading && <p>Loading...</p>}  {/* Show loading state */}
      {error && <p className="text-red-500">{error}</p>}  {/* Show error message */}
      
      {/* If weather data exists, display it */}
      {weatherData && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
};

export default WeatherDashboard;
