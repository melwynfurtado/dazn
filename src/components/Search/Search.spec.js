import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from './Search'

describe('Search Component', () => {
  let handleOnChangeMock
  let Component

  beforeEach(() => {
    handleOnChangeMock = jest.fn()
    Component = <Search handleOnChange={handleOnChangeMock} />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls handleOnChange on query change', () => {
    const wrapper = shallow(Component)
    wrapper.simulate('change')
    expect(handleOnChangeMock).toHaveBeenCalled()
  })
})