import axios from 'axios'

// HTTP Client abstraction
const httpClient = (function () {
  let client

  return function () {
    if (client) return client

    client = {
      get: options =>
        axios({
          method: 'get',
          ...options
        })
    }

    return client    
  }
})()

export default httpClient