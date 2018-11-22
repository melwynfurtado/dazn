import axios from 'axios'
import httpClient from './httpClient'

jest.mock('axios')

describe('httpClient', () => {
  it('should return httpClient object', () => {
    expect(httpClient()).toEqual(expect.objectContaining({
      get: expect.any(Function)
    }))
  })

  it('#get should call fetch API', () => {
    const theMovieDbList = {
      results: [{
        id: 123,
        title: 'Rambo II',
      }]
    }
    axios.mockImplementation(() => Promise.resolve(theMovieDbList))

    httpClient()
      .get()
      .then(response => {
        expect(response).toBe(theMovieDbList)
      })
  })
})