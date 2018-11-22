import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'
import Search from '../Search'
import MovieList from '../MovieList'
import theMovieDbService from '../../services/theMovieDbService'

jest.mock('../../services/theMovieDbService', () => {
  return jest.fn().mockImplementation(() => {
    const theMovieDbList = {
      results: [{
        id: 123,
        title: 'Rambo II',
      }]
    }

    return { searchMovies: () => Promise.resolve({ data: theMovieDbList }) }
  })
})

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders heading', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1.heading').text()).toEqual('The Movie DB Search - DAZN')
  })

  it('renders loader on query change', () => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 'Rambo' } }
    wrapper.instance().handleOnChange(event)
    expect(wrapper.find('div.loader').length).toEqual(1)
  })

  it('renders <Search /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Search).length).toEqual(1)
  })
  
  it('renders <MovieList /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(MovieList).length).toEqual(1)
  })

  it('calls theMovieDbService on query change', done => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 'Rambo' } }
    wrapper.instance().handleOnChange(event)
    setTimeout(() => {
      expect(theMovieDbService).toHaveBeenCalled()
      done()
    }, 600)
  })  
})