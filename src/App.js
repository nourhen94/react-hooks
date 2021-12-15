import "./App.css";

import MovieList from "./Component/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { moviesData } from "./Data";
import Search from "./Component/Search";
import AddMovie from "./Component/AddMovie";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom";
import ViewTrailer from "./Component/ViewTrailer";
function App() {
  const [movies, setmovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  //adding movie
  const handleAdd = (newMovie) => setmovies([...movies, newMovie]);
  //adding text
  const handleText = (e) => setText(e.target.value);
  //hadle rating
  const handleRating = (x) => setRating(x);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <div>
                <Search
                  rating={rating}
                  text={text}
                  handleText={handleText}
                  handleRating={handleRating}
                />
                <MovieList
                  movies={movies.filter(
                    (el) =>
                      el.name.toLowerCase().includes(text.toLowerCase()) &&
                      el.rating >= rating
                  )}
                />
              </div>
            )}
          />
          <Route
            path="/AddMovie"
            exact
            render={() => <AddMovie Add={handleAdd} />}
          />
          <Route
            path="/:id"
            render={(props) => <ViewTrailer movies={movies} {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
