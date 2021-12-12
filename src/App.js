import "./App.css";

import MovieList from "./Component/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { moviesData } from "./Data";
import Search from "./Component/Search";
import AddMovie from "./Component/AddMovie";
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
      <AddMovie Add={handleAdd} />
    </div>
  );
}

export default App;
