export const fetchWeather = async (city) => {
  // Access the API key from the environment variable
  const apiKey = "75d09c8bd4e5bdfd0e9f303ef0095eb8";

  // Construct the URL for the OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log(`URL: ${url}`);  // Log the URL for debugging purposes
  try {
    // Fetch data from the OpenWeatherMap API
    const response = await fetch(url);

    // Check if the response is okay (status 200)
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log('Weather Data:', data);  // Log the response data for debugging
    return data;
  } catch (error) {
    // Catch and log any errors
    console.error('Error fetching weather data:', error);
    throw new Error(error.message);
  }
};
