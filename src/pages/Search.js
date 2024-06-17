import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from "../components/Card";


export const Search = (apiPath) => {

  const [searchParams] =useSearchParams();
  const queryTerm=searchParams.get("q");
  const { data:movies}=useFetch({apiPath,queryTerm});
 

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length ===0 ? `No results found for movie : ${queryTerm}`:`Results for movie : ${queryTerm}`}</p>
      </section>
      <section>
        <div className='flex flex-wrap justify-start'>     
          { movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>)) 
          }
        </div>
      </section>
    </main>
  )

}
