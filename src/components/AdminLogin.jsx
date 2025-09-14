import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import getBaseURL from '../utils/baseURL';




const AdminLogin = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post(`${getBaseURL()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const auth = response.data
            console.log(auth)
            if (auth.token) {
                localStorage.setItem('token', auth.token)
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token Expired.... please Login again...')
                    navigate('/')
                }, 3000 * 1000)
            }
            alert("Admin Login Successful...!")
            navigate('/dashboard')
        } catch (err) {
            setMessage("Please provide a valid email & password")
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 className='text-lg font-bold mb-4'><span className='font-extrabold text-primary'>Admin</span> Login.</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
                        <input {...register("username", { required: true })} type="username" name='username' id='username' placeholder='Enter your username' className='shadow appearance-none border rounded w-full py-2 mb-3 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input {...register("password", { required: true })} type="password" name='password' id='password' placeholder='Enter Your Password.' className='shadow appearance-none border rounded w-full py-2 mb-5 px-3 leading-tight focus:outline-none focus:shadow' />
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div >
                        <button className='w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-8 py-1 focus:outline-none'>Login</button>
                    </div>
                </form>
                <div className='mt-5 text-center text-gray-500 text-xs'>
                    ©2025 BookIfy. All rights reserved by Ashik
                </div>
            </div>
        </div>
    )
}

export default AdminLogin