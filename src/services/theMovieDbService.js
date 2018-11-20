import httpClient from '../clients/httpClient'

function theMovieDbService (userConfig = {}, client = httpClient) {
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

  function generateReqPath({ endpoint, query}) {
    return `${config.baseUri}${endpoint}?api_key=${config.apiKey}&language=${config.language}&query=${encodeURI(query)}`
  }

  // Public API
  return {
    getMulti: async ({ query }) => {
      const response = await client().get(generateReqPath({
                              endpoint: '/search/multi',
                              query,
                            }))
      
      return response.json().then(data => data)
    }
  }
}

export default theMovieDbService