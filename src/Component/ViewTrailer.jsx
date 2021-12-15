import React from 'react'
import { Link } from 'react-router-dom'

const ViewTrailer = (props) => {

    const Details =props.movies.find((el)=>el.id==props.match.params.id)
    console.log(props)
    return (
        <div>
            <Link to="/">home</Link>
            <iframe width="560" height="315" src={Details.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
        </div>
    )
}

export default ViewTrailer
