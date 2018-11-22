import theMovieDbService from './theMovieDbService'

describe('theMovieDbService', () => {
  it('should return theMovieDbService object', () => {
    expect(theMovieDbService()).toEqual(expect.objectContaining({
      searchMovies: expect.any(Function)
    }))
  })

  it('#searchMovies should call get method on httpClient', () => {
    const httpClientMockGet = jest.fn()
    const httpClientMock = () => ({
      get: httpClientMockGet
    })

    const query = 'rambo'
    const apiKey = "fakeKey"
    const baseUri = "https://api.fake.org"
    
    const expectedOptions = {
      url: 'https://api.fake.org/search/movie',
      params: {
        query,
        language: 'en-US',
        api_key: apiKey,
      }
    }    

    const tmd = theMovieDbService({ 
      userConfig: { 
        apiKey,
        baseUri,
      },
      client: httpClientMock,
    })
    tmd.searchMovies({ query })
    
    expect(httpClientMockGet).toBeCalledWith(expectedOptions)
  })
})