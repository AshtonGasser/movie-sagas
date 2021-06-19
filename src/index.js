import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("SET_GENRES", fetchAllGenres);
  yield takeEvery("POST_MOVIES", postNewMovies);
  yield takeEvery("GET_DETAILS", getDetails);
}
//app.use('/api/movie', movieRouter);
//app.use('/api/genre', genreRouter)

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}
function* getDetails(action) {
    console.log('details response', action.payload);
  try {
    //get details for id selected in movie list
    const response = yield axios.get(`/api/genre/${action.payload.id}`);
    console.log('action.payload id', action.payload.id);
    yield put({ type: "SET_DETAILS", payload: response.data });
  } catch (error) {
    console.error(`${error} in get details`);
  }
}
function* fetchAllGenres() {
  // get all movies from the DB
  try {
    const genres = yield axios.get("/api/movie");
    console.log("get all:", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch {
    console.log("get all error");
  }
}

function* postNewMovies(action) {
  // post all movies from the
  try {
    yield axios.post("api/movie", action.payload);
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.error(`${error} in POST`);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    case "FILTER":
      const matchGenre = (genres) => genres.title === action.payload;
      return state.filter(matchGenre);
    default:
      return state;
  }
};

const details = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

const ad = (state = [], action) => {
    switch (action.type) {
      case "SET_DETAILS":
        return action.payload;
      default:
        return state;
    }
  };
// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
