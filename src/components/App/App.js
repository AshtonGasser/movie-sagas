import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import AddMovie from '../AddMovie/AddMovie.jsx'
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details" >
          <MovieDetails />
          </Route>
        {/* Add Movie page */}
        <Route path ="/addmovie">
          <AddMovie/>
          </Route> 
      </Router>
    </div>
  );
}


export default App;
