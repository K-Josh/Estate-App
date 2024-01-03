/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e)=>{
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data); 
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-semibold text-center my-7 justify-center text-3xl '>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='Enter email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Enter password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
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