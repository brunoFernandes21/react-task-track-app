import { FcGoogle } from "react-icons/fc";
// import ParticlesBg from 'particles-bg'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {

  const [formData, setFormData] = useState(
    {fullname: "", email: "", password: "", confirm_password: ""}
  )
  const [error, setError ] = useState('')
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
    if(formData.email !== '' && formData.password !== '' && formData.confirm_password !== ''){
      if(formData.password !== formData.confirm_password){
        isValid = false
        setError('Passwords do not match')
        console.log("Passwords do not match")
      }
    }
    return isValid
  }
 
  const register = async () => {
    if(validatePassword()) {
      try {
        setError('')
        setLoading(true)
        const response = await fetch("http://localhost:8000/users", {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(formData),
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        setError(error.message)
        console.log(error.message)
      }
      setLoading(false)
    }

  }

  return (
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="border px-6 py-8 rounded shadow-md text-white w-full">
          <div className='flex flex-col gap-4 mb-4'>
            <button className='google flex gap-2 text-white bg-gray-700 p-4 w-full font-medium rounded-full'>
              <FcGoogle className="text-2xl"/> Sign in with Google
            </button>
        </div>
          <h1 className="mb-6 text-3xl text-center">Register</h1>
          {error && 
          <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"'>
            <span className='font-bold'>{error}</span>
          </div>}
          <input
            type="text"
            className="block text-black border border-grey-light w-full p-3 rounded-full mb-4"
            name="fullname"
            value={formData.fullname}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="block text-black border border-grey-light w-full p-3 rounded-full mb-4"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="block text-black border border-grey-light w-full p-3 rounded-full mb-4"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="block text-black border border-grey-light w-full p-3 rounded-full mb-4"
            name="confirm_password"
            value={formData.confirm_password}
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <button
          disabled={loading}
          onClick={register}
            className="signup__btn w-full text-center py-3 rounded-full bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-grey-dark mt-4 text-center">
          <p>Already have an account?</p>
          <Link
            className=" signup__link no-underline text-xl"
            to="/login">
              <span> Login</span>
          </Link>
        </div>
        </div>
      </div>

  );
};

export default Register;
