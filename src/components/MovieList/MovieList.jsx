import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";
function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleClick = (movie) => {
    console.log("clicked poster");
    console.log("movie clicked:", movie);
    dispatch({
      type: "GET_DETAILS",
      payload: movie,
    });
    history.push("/details");
  };

  const handleNext = () => {
    console.log("clicked add movie");
    history.push("/addmovie");
  };
  return (
    <main>
      <h1>MovieList</h1>
      <button onClick={handleNext}>Add Movie</button>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                onClick={() => handleClick(movie)}
                src={movie.poster}
                alt={movie.title}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
