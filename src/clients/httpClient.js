// HTTP Client abstraction, currently implemented using Fetch API
const httpClient = (function () {
  let client

  return function () {
    if (client) return client

    client = {
      get: reqPath => {
        return fetch(reqPath)
      }
    }

    return client    
  }
})()

export default httpClient