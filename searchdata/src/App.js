// App.js

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState("books");

  const search = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/${category}?query=${query}`
      );
      setResults(response.data[category]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="books">Books</option>
        <option value="movies">Movies</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${category} by name, author, or category`}
      />
      <button onClick={search}>Search</button>

      <ul>
        {results.length === 0 ? (
          <li>No results found.</li>
        ) : (
          results.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>
                {category === "books"
                  ? `Author: ${item.author}`
                  : `Director: ${item.director}`}
              </p>
              <p>{`Category: ${item.category || item.genre}`}</p>
              <p>
                Description: {item.description || "No description available."}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
