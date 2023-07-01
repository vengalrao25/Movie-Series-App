import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { APIKey } from '../../common/apis/movieApiKey';


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies' , async(term)=>{
    // const movieText = 'Harry' ; 
    // const APIKey ='c32fd728';
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${term}&type=movie`);
    return response.data; 
    //   .then((response)=>
    //     // console.log(response.data);
    //    { return response.data;}
        
    //   );    
})


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows' , async(term)=>{
    // const seriesText = 'Friends' ; 
    // const APIKey ='c32fd728';
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${term}&type=series`);
    return response.data;
         
})


export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail' , async(id)=>{

    // const APIKey ='c32fd728';
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&i=${id}&Plot=full`);
    // console.log(response.data ) ; 
    return response.data;
         
})





const initialState = {
    movies:{},
    shows : {} , 
    selectMovieOrShow : {}
};

const movieSlice = createSlice({
    name : 'movies' ,
    initialState, 
    reducers : {
        // addMovies : (state , {payload}) =>{
        //     state.movies = payload ;
        // },

        removeSelectedMovieOrShow : (state) =>{
            state.selectMovieOrShow = {} ; 
        }

    },
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=>{
            console.log("pending");
        } , 
        [fetchAsyncMovies.fulfilled] : (state , {payload} )=>{
            console.log("Fetched Successfully!");
            return {...state , movies:payload} ; 
        },
        [fetchAsyncMovies.rejected] : ()=>{
            console.log("Rejected");
        },


        [fetchAsyncShows.fulfilled] : (state , {payload} )=>{
            console.log("Fetched Successfully!");
            return {...state , shows : payload} ; 
        },




        [fetchAsyncMovieOrShowDetail.fulfilled] : (state , {payload} )=>{
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
            // return {...state , selectedMovieOrShow : payload} ; 
        },
    },
});

// export const {addMovies} = movieSlice.actions ; 
export const {removeSelectedMovieOrShow } = movieSlice.actions ; 



export const getAllMovies = (state)=> state.movies.movies ; 
export const getAllShows = (state)=> state.movies.shows; 
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
// export const getSelectedMovieOrShow = (state)=> state.movie.selectedMovieOrShow;





export default  movieSlice.reducer ;
