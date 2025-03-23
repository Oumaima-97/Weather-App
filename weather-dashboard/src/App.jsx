import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";


const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Weather Dashboard</h1>
      
      <SearchBar onSearch={handleSearch} />

      {/* Loading indicator */}
      {loading && <p className="text-gray-700 mt-4">Fetching weather data...</p>}

      {/* Error message */}
      {error && <ErrorMessage message={error} />}

    </div>
  );
};

export default App;
