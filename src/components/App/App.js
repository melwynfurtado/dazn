import React from 'react'
import debounce from 'lodash/debounce'
import theMovieDbService from '../../services/theMovieDbService'
import Search from '../Search'
import MovieList from '../MovieList'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      queryChanged: false,
      results: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.getResultsDebounced = debounce(this.getResults, 500)
  }

  getResults() {
    const theMovieDb = theMovieDbService()
    
    theMovieDb
      .searchMovies({ query: this.state.query })
      .then(({ data }) => {
        this.setState({ 
          results: data.results,
          queryChanged: false,
        })
      })
      .catch(error => {
        this.setState({ 
          results: [], 
          queryChanged: false, 
        }, () => {
          console.error(error)
        })
      })
  }

  handleOnChange(e) {
    this.setState({ 
      query: e.target.value,
      queryChanged: true && e.target.value.length > 0,
    }, () => {
      this.getResultsDebounced()
    })
  }

  render() {
    const { results, query, queryChanged } = this.state

    return (
      <div className="theMovieDb-search">
        <h1 className="heading">The Movie DB Search - DAZN</h1>
        <Search handleOnChange={this.handleOnChange} query={query} />
        { 
          queryChanged ? 
            <div className="loader"></div>
          :
            <MovieList movies={results} />
        }
      </div>
    )
  }
}

export default App