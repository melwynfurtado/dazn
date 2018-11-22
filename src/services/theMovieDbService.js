import httpClient from '../clients/httpClient'

function theMovieDbService({ userConfig, client } = { userConfig: {}, client: httpClient }) {
  const defaultConfig = {
    apiKey: "8cdf873567dbb1b14b8d11a81b5f0cef",
    baseUri: "https://api.themoviedb.org/3",
    imagesUri: "https://image.tmdb.org/t/p",
    timeout: 5000,
    language: "en-US",
  }

  // Consumer of theMovieDbService can override default config to use specific version 
  // or even the movie service source and extend the public api with new getters, etc
  const config = {
    ...defaultConfig,
    ...userConfig
  }

  const generatePath = endpoint  => config.baseUri + endpoint

  const generateParams = ({ query }) => {
    const { apiKey, language } = config
    return {
      api_key: apiKey,
      language,
      query: encodeURI(query),
    }
  }

  // Public API
  return {
    searchMovies: ({ query }) => {      
      const options = {
        url: generatePath('/search/movie'),
        params: generateParams({ query })
      }

      return client().get(options)
    }
  }
}

export default theMovieDbService