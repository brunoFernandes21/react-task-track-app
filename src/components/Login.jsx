import React from 'react'
// import ParticlesBg from 'particles-bg'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const [formData, setFormData] = useState(
    {email: "", password: ""}
  )
  const [ error, setError ] = useState('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const validatePassword = () => {
    let isValid = true
    if(formData.email === '' || formData.password === ''){
      isValid = false
    }
    return isValid
  }
  const login = async () => {
      if(validatePassword()) {
      try {
        const response = await fetch("http://localhost:8000/login",
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(formData),
        })
        // navigate('/')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        setError("Incorrect password")
      }
      setLoading(false)
    }
    
  }



  return (
    <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="border px-6 py-8 rounded shadow-md text-white w-full">
          <div className='flex flex-col gap-4 mb-4'>
            <button className='google flex gap-2 text-white p-4 w-full font-medium rounded-full'>
              <FcGoogle className="text-2xl"/> Sign in with Google
            </button>
          </div>
          <h1 className="mb-6 text-3xl text-center">Login</h1>
          {error && 
          <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"'>
            <span className='font-bold'>{error}</span>
          </div>}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded-full mb-4 text-black"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full text-black p-3 rounded-full mb-4"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button
          disabled={loading}
          onClick={login}
            className="signup__btn w-full text-center py-3 rounded-full text-white my-1"
          >
            Sign into your account
          </button>
            <div className='mt-3 text-center'>
              <span>Forgot Password? </span>
              <Link className='underline font-black' to="/forgot-password">Click here</Link>
              <span> to reset it.</span>
            </div>
          <div className="signup__link no-underline mt-3 text-center text-xl">
          <Link
            to="/register">
              <span> Create New Acccount</span>
          </Link>
        </div>

        </div>

      </div>

  )
}

export default Login