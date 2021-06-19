import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";



function AddMovie(){
const history = useHistory
const dispatch = useDispatch();


const [newMovie, setNewMovie] = useState({
    title: '',
    poster: '', 
    description: '',
    movie_id: null,
    genre_id: null

})

// useEffect(() => {
//     dispatch({type: 'SET_GENRES'})
// }, []);

const handleClick =() => {
// checking to see what is logged⬇
console.log('new movie!', newMovie);
// dispatch the new movie to redux⬇
dispatch({
    type: 'POST_MOVIES', 
    payload: newMovie 
})

}//end handleClick

const handleInputs = (key,value) => {
    setNewMovie({...newMovie,
        [key]: value, 
})
}//end handleInputs


const handleBack = () => {
        console.log("clicked cancel");
        history.push('/')
      };// end handleBack



    


}

export default AddMovie