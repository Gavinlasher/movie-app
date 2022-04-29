import "./App.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = "http://www.omdbapi.com?apikey=21b3b37e";
  const movie1 = {
    Title: "Batman Forever",
    Year: "1995",
    imdbID: "tt0112462",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  };

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src="https://th.bing.com/th/id/R.9c38e3f68771388b22b8ebd9f672f6ff?rik=o613INxNoi1smg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fF%2fa%2fV%2fQ%2fQ%2f9%2fsearch-icon-orange-hi.png&ehk=s%2bx3JYKxPZ1irUerIz%2bMSX2rnuc%2bMPQA9GyiFOgPMyA%3d&risl=&pid=ImgRaw&r=0"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movies={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <div>
            <h2>No movies found</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// 21b3b37e api key
