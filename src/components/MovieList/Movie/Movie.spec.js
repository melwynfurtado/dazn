import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Movie from './Movie'

describe('Movie Component', () => {
  let Component

  const movie = {
    id: 123,
    title: 'Rambo II',
    overview: 'Rambo description text'
  }

  beforeEach(() => {
    Component = <Movie movie={movie} />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders movie title by default', () => {
    const wrapper = shallow(Component)
    expect(wrapper.find('li.movie').text()).toEqual('Rambo II')
  })

  it('renders movie card on click of movie title', () => {   
    const wrapper = shallow(Component)
    wrapper.find('li.movie').simulate('click')
    expect(wrapper.find('div.modal h3').text()).toEqual('Rambo II')
    expect(wrapper.find('div.modal p').text()).toEqual('Rambo description text')
  })
  
  it('closes movie card on click of close icon on movie card', () => {   
    const wrapper = shallow(Component)
    // Open the modal
    wrapper.find('li.movie').simulate('click')
    // Close the modal
    wrapper.find('li.movie span.close').simulate('click', { stopPropagation : () => {}})
    expect(wrapper.find('div.modal').length).toEqual(0)
  })   
})