import React from 'react'

export default function MovieCard({movies}) {
  return (
    <div className="movie">
    <div>
      <p>{movies.Year}</p>
    </div>
    <div>
      <img src={movies.Poster} alt=""/>
    </div>
    <div>
      <span>{movies.Type}</span>
      <h3>{movies.Title}</h3>
    </div>
  </div>
  )
}
