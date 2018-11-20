import theMovieDbService from './theMovieDbService'
// import httpClient from '../clients/httpClient'

describe('theMovieDbService', () => {
  it('should return theMovieDbService object', () => {
    expect(theMovieDbService()).toEqual(expect.objectContaining({
      getMulti: expect.any(Function)
    }))
  })

  it('#getMulti should return multiple models in single request', async () => {
    const httpClientMock = jest.fn(() => ({
      get: () => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve({ results: [ 
              {
                title: 'Rambo',
                id: 123,
              } 
            ]})
          }
        })
      }
    }))

    const response = await theMovieDbService({}, httpClientMock).getMulti('rambo')
    const expected = [{
      title: 'Rambo',
      id: 123,      
    }]
    expect(response.results).toEqual(expected)
  })
})