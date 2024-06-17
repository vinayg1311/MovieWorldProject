import React from 'react';
import PageNotFoundImage from "../assets/images/PageNotFound.jpg"
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <section className='flex flex-col justify-center'>
      <div className='flex flex-col items-center'>
        <p className='text-6xl text-gray-700 dark:text-white'>Oops ! Page Not Found</p>
        <div className='max-w-3xl'>
        <img className="my-4 rounded" src={PageNotFoundImage}></img>
        </div>
      </div>
      <div className='m-4'>
        <Link to="/">
          <Button Children="Back to Home"></Button>
        </Link>       
      </div>
    </section>
  )
}
