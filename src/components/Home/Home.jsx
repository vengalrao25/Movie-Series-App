import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing.jsx";
// import movieApi from '../../common/apis/movieApi.jsx'
// import  {APIKey} from   '../../common/apis/movieApiKey.jsx'

import { useDispatch } from "react-redux";
import {  fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice.jsx";





const Home = () => {
  // const movieText = 'Harry' ; 
  const dispatch = useDispatch() ; 
  const movieText = 'Harry';
  const showText = 'Friends' ;
  useEffect(()=>{
    
    // const fetchMovies = async () =>{
    //   const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err)=>{
    //     console.log("Err :-",err)
    //   });
    //   console.log("The Response from API :-",response) ;
    // };
    // fetchMovies();

    // const url = "https://www.omdbapi.com"

    // const fetchMovies  = async () =>{
    //   axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    //   .then((response)=>{
    //     // console.log(response);
        
    //   dispatch(addMovies(response.data));
    //   })
    // }
    // fetchMovies()
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText)) ; 
  },[dispatch]);
    
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  );
};

export default Home;
