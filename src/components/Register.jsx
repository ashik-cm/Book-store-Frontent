import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

const Register = () => {

    const [message, setMessage] = useState("")
    const {registerUser,sighInWithGoogle} = useAuth()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        try{
            await registerUser(data.email,data.password)
            alert("User Registered Succesfully")
        }catch(err){
            setMessage("Please provide a valid email & password")
        }
    }
    const handleGoogleSignIn = async() => {
        try {
            await sighInWithGoogle()
            alert("Login Succesful...")
            navigate("/")
        } catch (error) {
            alert("Google Sign In failed")
            console.error(error)
        }
    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='text-lg font-semibold mb-4'>Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} type="email" name='email' id='email' placeholder='Enter Your email.' className='shadow appearance-none border rounded w-full py-2 mb-3 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input {...register("password", { required: true })} type="password" name='password' id='password' placeholder='Enter Your Password.' className='shadow appearance-none border rounded w-full py-2 mb-5 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-8 py-1 focus:outline-none'>Register Here</button>
                    </div>
                </form>
                <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please <Link className='text-blue-600 hover:text-blue-700' to={'/login'}>Login</Link></p>
                <div className='mt-4'>
                    <button onClick={handleGoogleSignIn} className='w-full flex flex-wrap gap-1 items-center justify-center
                    bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    focus:outline-none'><FaGoogle className='mr-2' />Sign in with Google
                    </button>
                </div>
                <div className='mt-5 text-center text-gray-500 text-xs'>
                    ©2025 BookIfy. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Register