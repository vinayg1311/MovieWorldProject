
import { useEffect,useState } from 'react';

export const useFetch = ({apiPath,queryTerm=""}) => {

    const [data,setData]=useState([]);
    
    const URL=queryTerm.length===0 ? `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`: `https://api.themoviedb.org/3/search/movie?query=${queryTerm}&api_key=${process.env.REACT_APP_API_KEY}`; 



    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(URL);
          const respJson=await response.json();
          setData(respJson.results);
        }
        fetchMovies();
      },[URL])
  
  
    return {data};
}
