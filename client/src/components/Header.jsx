/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearchengin } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md '>
   <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
     <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-green-500'>Cam</span>
        <span className='text-red-500'>er</span>
        <span className='text-yellow-500'>oon</span>
        <span>Estate</span>
     </h1>
     <form className='bg-slate-100 p-[0.5px] sm:p-3 rounded-lg flex items-center'>
        <input type='text' placeholder='Search...'  className='bg-transparent px-[8px] sm:px-[3px] focus:outline-none placeholder:text-gray-500 placeholder:opacity-70 w-24 sm:w-64 md:w-[12rem]' />
        <FaSearchengin className='text-yellow-500 sm:text-[1.6rem]'/>
     </form>
     <ul className='flex gap-4 text-[16px] sm:text-md'>
        <Link to={'/'} className='hidden sm:inline text-slate-600' id='line'>Home</Link>
        <Link to={'/about'} className='hidden sm:inline text-slate-600' id='line'>About</Link>
        <Link to={'/sign-in'} className='text-slate-600' id='line'>SignIn</Link>
     </ul>
   </div>
   </header>
  )
}

