/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    }) 
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); 
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
        return
      }
      setLoading(false)
      setError(null)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-semibold text-center my-7 justify-center text-3xl '>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='Enter email' className='border p-3 rounded-lg focus:outline-red-600' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Enter password' className='border p-3 rounded-lg focus:outline-yellow-500' id='password' onChange={handleChange}/>
        <button disabled={loading} className={`${loading ? 'animate-pulse cursor-' : null} text-white p-2 bg-green-600 rounded-lg uppercase hover:opacity-75 disabled:opacity-80 cursor-pointer`}>
        {loading ? 'Loading ...' : 'Sign in'}
        </button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p className='text-[16px]'>Don&apos;Have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-green-500'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
 }
export default SignIn