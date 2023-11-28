/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-semibold text-center my-7 justify-center text-3xl '>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter username' className='border p-3 rounded-lg' id='username'/>
        <input type='text' placeholder='Enter email' className='border p-3 rounded-lg' id='email'/>
        <input type='text' placeholder='Enter password' className='border p-3 rounded-lg' id='password'/>
        <button className='text-white p-2 bg-green-600 rounded-lg uppercase hover:opacity-75 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p className='text-[16px]'>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-green-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp