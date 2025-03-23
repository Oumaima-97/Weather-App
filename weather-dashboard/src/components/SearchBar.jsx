import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput(""); // Clear input field after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 border rounded-md w-64"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
