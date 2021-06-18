import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";




function MovieDetails() {
 const history = useHistory();
const dispatch = useDispatch(); 
const movie = useSelector((store) => store.movies);


 return(


<li></li>

 )

}





export default MovieDetails