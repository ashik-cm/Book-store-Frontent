import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import BookLogo from '../../assets/book-logo.jpg'
import { MdSpaceDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";




const DashboardLayout = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
    }

    return (
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white justify-between">
                    {/* Left Logo */}
                    <div>
                        <a href="/" className="inline-flex items-center justify-center h-12 w-12 rounded-lg">
                            <img src={BookLogo} alt="logo" />
                        </a>
                    </div>
                    {/* Center Navigation */}
                    <nav className="hidden sm:flex space-x-6 ml-6">
                        <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-100 focus:text-gray-400 :bg-gray-100 rounded-lg px-3">
                            <span><MdCreateNewFolder className="h-6 w-6" /></span>
                        </a>

                        <Link to="/dashboard"
                            className="inline-flex items-center justify-center py-3 px-3 text-purple-600 bg-white border border-purple-600 rounded-lg">
                            <span><MdSpaceDashboard className="h-6 w-6" /></span>
                        </Link>

                        <Link to="/dashboard/add-new-book"
                            className="inline-flex items-center justify-center py-3 px-3 hover:text-gray-400 hover:bg-gray-100 focus:text-gray-400 focus:bg-gray-100 rounded-lg">
                            <span ><IoLibrary className="h-6 w-6" /></span>
                        </Link>

                        <Link to="/dashboard/manage-books"
                            className="inline-flex items-center justify-center py-3 px-3 hover:text-gray-400 hover:bg-gray-100 focus:text-gray-400 focus:bg-gray-100 rounded-lg">
                            <span><MdOutlineManageHistory className="h-6 w-6" /></span>
                        </Link>
                        <button className="inline-flex items-center justify-center py-3 px-3 hover:text-gray-400 hover:bg-gray-100 focus:text-gray-400 focus:bg-gray-100 rounded-lg">
                            <span><IoSettings className="h-6 w-6" /></span>
                        </button>
                    </nav>

                    {/* Right User Section */}
                    <div className="flex flex-shrink-0 items-center ml-auto">
                        {/* Search bar hidden on mobile */}
                        <div className="hidden md:block relative w-full max-w-xs mr-6">
                            <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-2 border-gray-200 placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
                        </div>
                        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                            <span className="sr-only">User Menu</span>
                            <div className="hidden md:flex md:flex-col md:items-end ">
                                <span className="font-bold">Ashik</span>
                                <span className="text-sm text-gray-600">admin</span>
                            </div>
                            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-red-100 border-2 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile" className="h-full w-full  object-cover" />
                            </span>
                        </button>

                        <div className="flex justify-between items-center border-l pl-3 ml-3">
                            <button className="relative p-2 text-black hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span><IoMdNotifications className="h-6 w-6 animate-pulse "/></span>
                                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full"></span>
                                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full animate-ping"></span>
                            </button>

                            <button onClick={handleLogout} className="relative p-2 text-black font-extrabold hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span><LuLogOut className="h-6 w-6"/></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6 sm:p-10 space-y-6">
                    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                        <div className="mr-6">
                            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                            <h2 className="text-gray-600 ml-0.5 font-semibold">Book Store Inventory</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                            <Link to="/dashboard/manage-books" className="inline-flex px-5 py-3 mr-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md font-bold mb-3">Manage Books
                            </Link>
                            <Link to="/dashboard/add-new-book" className="inline-flex px-5 py-3 text-white bg-purple-600 font-bold :bg-purple-700 focus:bg-purple-700 rounded-md  mb-3">Add New Book
                            </Link>
                        </div>
                    </div>
                    <Outlet />
                </main>
            </div>
        </section>

    )
}

export default DashboardLayout