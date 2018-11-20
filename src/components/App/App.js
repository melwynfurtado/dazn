import React from 'react'
import debounce from 'lodash/debounce'
import theMovieDb from '../../services/theMovieDbService'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.getResultsDebounced = debounce(this.getResults, 500)
  }

  async getResults() {
    const theMovieDbInstance = theMovieDb()
    const defaultResponse = await theMovieDbInstance.getMulti({ query: this.state.query })
    if (defaultResponse && defaultResponse.results) {
      this.setState({ results: defaultResponse.results })
    } else {
      this.setState({ results: [] })
    }
  }

  handleOnChange(e) {
    this.setState({ query: e.target.value }, () => {
      this.getResultsDebounced()
    })
  }

  render() {
    const { results, query } = this.state

    return (
      <div className="theMovieDb-search">
      <h1>The Movie DB Search - DAZN</h1>
      <input className="search-field" type="text" name="query" value={query} onChange={this.handleOnChange} />
      <ul className="search-results">
        {
          results.map(m => <li key={m.id} className="item">{m.title || m.name}</li>)
        }
      </ul>
      </div>
    )
  }
}

export default App