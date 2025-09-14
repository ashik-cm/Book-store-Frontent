import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth()
  if (currentUser) {
    return children
  }
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.9s]"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.11s]"></div>
    </div>
  }
  return <Navigate to={'/login'} replace />
}

export default PrivateRoute