import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import './MovieList.scss'

const MovieList =({ movies }) => (
  <ul className="search-results">
    {
      movies.length === 0 ? 
        <li>No movies were retrieved.</li>
      :
        movies.map(movie => <Movie key={movie.id} movie={movie} />)
    }
  </ul>
)

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,  
    })
  ),
}

export default MovieList