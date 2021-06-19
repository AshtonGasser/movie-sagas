import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const movie = useSelector((store) => store.movies);
  // const genres = useSelector((store) => store.genres);
  const details = useSelector((store) => store.details);

  const handleBack = () => {
    console.log("back to movies");
    history.goBack();
  };

  return (
    <div>
      <h1></h1>

      <button onClick={handleBack}>Back To Movies</button>

      <section className="details">
        {details.map((detail) => {
          return (
            <div key={detail.id}>
              <h3>{detail.title}</h3>
              <img src={detail.poster} alt={detail.title} />
              <p>{detail.description}</p>
              <h4>Genres</h4>
              <p>{detail.genre}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default MovieDetails;
