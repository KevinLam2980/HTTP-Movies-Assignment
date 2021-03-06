import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const MovieCard = props => {
  const { title, director, metascore, stars, id} = props.movie;
  const history = useHistory()

  const deleteMovie = id => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
      console.log(res)
      history.push('/')
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
        <button  onClick={(evt) => {
          evt.preventDefault()
          history.push(`/update-movie/${id}`)}}>
        Edit
      </button>
      <button  onClick={(evt) => {
          evt.preventDefault()
          deleteMovie(id)}}>
        Delete
      </button>
    </div>
  );
};

export default MovieCard;
