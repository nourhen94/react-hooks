import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
      


    return (


        <div className="movie-list">
            <Link to="/AddMovie">AddMovie</Link>
          {movies.map(el=>
           <MovieCard movie={el} /> )}
        </div>
    )
}

export default MovieList
