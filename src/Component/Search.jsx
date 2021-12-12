import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleText,rating,handleRating}) => {
    return (
        <div className="header-container">
            <h1>Our Movies App</h1>
            <div className="search-container">
            <input type="text" value={text} onChange={handleText} />
          <StarRating rating={rating} handleRating={handleRating}/>
            </div>
        </div>
    )
}

export default Search

