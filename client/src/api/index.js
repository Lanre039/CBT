import axios from 'axios'

// fetch token from localStorage
const token = '....something'

export const examPortal = axios.create({
  baseURL: "localhost:4000/api",
  headers: {
    "Authorization": `bearer ${token}`,
    "Content-Type": "application/json"
    // add other headers here
  }
})


// so just import the examPortal function from anywhere you want to make an api call

/**
 * import examPortal from '..../././././'

const response = await examPortal.post('/questions', {
  body goes here
})

OR

const response = await examPortal.get('/questions')

**/
