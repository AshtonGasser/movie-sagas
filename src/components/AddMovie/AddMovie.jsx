import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddMovie() {
  const history = useHistory;
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
    movie_id: null,
    genre_id: null,
  });

  // useEffect(() => {
  //     dispatch({type: 'SET_GENRES'})
  // }, []);

  const handleClick = () => {
    // checking to see what is logged⬇
    console.log("new movie!", newMovie);
    // dispatch the new movie to redux⬇
    dispatch({
      type: "POST_MOVIES",
      payload: newMovie,
    });
  }; //end handleClick

  const handleInputs = (key, value) => {
    setNewMovie({ ...newMovie, [key]: value });
  }; //end handleInputs

  const handleBack = () => {
    console.log("clicked cancel");
    history.push("/");
  }; // end handleBack

  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Movie Title"
            onChange={(event) => handleInputs("title", event.target.value)}
          />
          </div>
          <div>
              <input
              type ="text"
              placeholder ='Poster URL'
              onChange={(event) => handleInputs("poster", event.target.value)}
              />
              </div>
              <div>
                  <textarea
                  placeholder ="Movie Synopsis"
                  rows ="6"
                  cols="50"
                  onChange={(event) => handleInputs('description', event.target.value)}
                  />
                  </div>
                  <div>
                      <select
                          name="Genre"
                          onChange={(event) => handleInputs('genre_id', event.target.value)}
                          >
                              
                      </select>
                  </div>
                  
              
        
      </form>
    </div>
  );
}

export default AddMovie;
