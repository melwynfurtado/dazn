import React from 'react'
import PropTypes from 'prop-types'
import './Search.scss'

const Search = ({ query, handleOnChange }) => (
  <input className="search-field" type="text" name="query" value={query} onChange={handleOnChange} />
)

Search.propTypes = {
  query: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
}

export default Search