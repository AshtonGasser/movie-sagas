import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddMovie() {
  const history = useHistory();
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

  const handleClick = (event) => {
      event.preventDefault()
    // checking to see what is logged⬇
    console.log("new movie!", newMovie);
    // dispatch the new movie to redux⬇
    dispatch({
      type: "POST_MOVIES",
      payload: newMovie,
    });
    history.push("/");
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
            type="text"
            placeholder="Poster URL"
            onChange={(event) => handleInputs("poster", event.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Movie Synopsis"
            rows="6"
            cols="50"
            onChange={(event) =>
              handleInputs("description", event.target.value)
            }
          />
        </div>
        <div>
          <select
            name="Genre"
            onChange={(event) => handleInputs("genre_id", event.target.value)}
          >
            <option value="0"></option>
            <option value="1">Adventure</option>  
            <option value="2">Animated</option>  
            <option value="3">Biographical</option>  
            <option value="4">comedy</option>  
            <option value="5">Disaster</option>  
            <option value="6">Drama</option>  
            <option value="7">Epic</option>  
            <option value="8">Fantasy</option>  
            <option value="9">Musical</option>  
            <option value="10">Romantic</option>  
            <option value="11">Science Fiction</option>  
            <option value="12">Space-Opera</option>  
            <option value="13">SuperHero</option>    
          </select>
        </div>
        <div>
        <button onClick= {handleBack}>Cancel</button>
        
        <button onClick= {handleClick}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
