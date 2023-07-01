import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


// import 391.JPG from '../../images/391.JPG' 
const Header = () => {
  const dispatch = useDispatch();
  const [term , setTerm] = useState('');
  const submitHandler = (e) =>{
    e.preventDefault();
    if (term==='') return alert("Please enter search term!");
    
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  }



  let p ='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg'
  return (
    <div className="header">
      
      <div className="logo">
        <Link to='/'>Movie App </Link>
      </div>      

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)} />
          <button type='submit'><i className="fa fa-search"></i></button>
        </form>
      </div>
     
      <div className="user-image">
        <img src={p} alt="user" />
      </div>
    </div>
  );
}
;
export default Header;
