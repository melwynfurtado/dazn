import React from 'react'
import renderer from 'react-test-renderer'
import MovieList from './MovieList'

describe('MovieList Component', () => {
  const movies = [{
    id: 123,
    title: 'Rambo II',
  }]

  it('renders correctly', () => {
    const tree = renderer
                  .create(<MovieList movies={movies} />)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders "No results found"', () => {
    const tree = renderer
                  .create(<MovieList movies={[]} />)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })
})