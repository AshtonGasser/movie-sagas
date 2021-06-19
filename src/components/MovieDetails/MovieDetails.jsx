import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";




function MovieDetails() {
 const history = useHistory();
const dispatch = useDispatch(); 
const movie = useSelector((store) => store.movies);
const genres = useSelector((store) => store.genres);

 return(


<li></li>

 )

}





export default MovieDetails