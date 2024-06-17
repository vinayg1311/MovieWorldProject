import React from "react";
import { Link } from "react-router-dom";

export const Footer=()=>{
    return(
    <footer className="bg-white border-t-2 border-gray-200 dark:bg-gray-900 my-1">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030<Link to="https://flowbite.com/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
               <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/vinay-gupta-470451171/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Linkedin</a>
            </li>
            <li>
               <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
            </li>
            <li>
               <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>
    </footer>
    )
}