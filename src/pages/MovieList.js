import React from 'react';
import { Card } from "../components/Card";
import { useFetch } from '../hooks/useFetch';

export const MovieList = (apiPath) => {

  const { data:movies}=useFetch(apiPath);

  return (
    <main>
      <section>
        <div className='flex flex-wrap justify-start others:justify-evenly'>     
          { movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>)) 
          }
        </div>
      </section>
    </main>
  )
}
