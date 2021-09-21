// import axios here
const axios = require("axios")
//import the .env library
const dotenv = require("dotenv")
dotenv.config();

//no quotes (like the original github clone key was in a string)
//telling our node process that we have information stored in a .env file and we want you to go fetch it
const api_key = process.env.MOVIE_DB_API_KEY;
// const api_key = "d771b19ef336ed8381def3a60b574464";
console.log(`the api key: ${api_key}`)

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  console.log(`about to call this url ${url}`)
  return axios(url)
  .then(function(response){
    // console.log("response from making the first api call", response)
    return response
  })
}
discoverMovie()


/**
 * 
 * @param {number} id this is the id of the movie
 */

 
const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  let movieById = axios(url).then(function(response){
    console.log("get movie by id response:", response.data)
    return response.data
  })
  return movieById
}
// console.log(getMovieById(500))

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response){
    console.log('get move by id failure first .then function')
    return response.status// this doesn't work
  }).catch(function(error){
    // console.log(error.response.status)
    return error.response.status
  })
}
console.log(getMovieByIdFailure(5783))


//export makes these functions available for the rest of your code
//functions are in this file, index.js
//have to make them available to, for eg, the testing file
//these three functions are being made available to some other file in our code
module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}