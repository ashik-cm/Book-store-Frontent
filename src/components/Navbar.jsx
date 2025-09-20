import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import avatarImg from '../assets/avatar.png'
import { GiBookshelf } from "react-icons/gi";
import bookLogo from '../assets/book-logo.jpg'



const navigation = [
    { name: "Dashboard", href: '/dashboard' },
    { name: "Orders", href: '/orders' },
    { name: "Cart Page", href: '/cart' },
    { name: "Checkout", href: '/checkout' },
]

const Navbar = () => {

    const {currentUser,logout} = useAuth()

    const handleLogout = () =>{
        logout()
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log(cartItems)

    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-1 bg-white mt-3'>
            <nav className='flex justify-between items-center'>
                <div className="flex items-center md:gap-1 gap-4">
                    <Link to={'/'}>
                        <img style={{height:'90px'}} src={bookLogo} alt="" />
                    </Link>
                    <Link to={'/'} style={{textShadow:'0px 0px 5px black'}} className='font-extrabold text-3xl text-white hover:text-yellow-600'>Bookify . <span className='text-white' style={{fontSize:'18px' , textShadow:'0px 0px 5px black'}}> com</span></Link>
                </div>
                <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className='absolute inline-block left-3 inset-y-2' />
                        <input type="text" placeholder='Search Here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                    </div>
                <div className="relative flex items-center md:space-x-2 ">
                    <div>
                        {
                            currentUser ? <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-gray-500' : ""}`} />
                                </button>
                                {
                                    isDropdownOpen && (
                                        <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                            <ul className='py-2'>
                                                {
                                                    navigation.map(item => (
                                                        <li key={item.name} className='font-medium' onClick={() => setIsDropdownOpen(false)}>
                                                            <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                                <li>
                                                    <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </> : <Link to={'/login'}><FaUser className='size-6' /></Link>
                        }
                    </div>
                    <button className='hidden sm:block'>
                        <FaHeart className='size-6' />
                    </button>
                    <Link to={'/cart'} className='bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm'>
                        <FaShoppingCart className='size-6' />
                        {
                            cartItems.length>0 ?
                            <span className='text-lg font-bold sm:ml-1'>{cartItems.length}</span>
                            :<span className='text-lg font-bold sm:ml-1'>0</span>
                        }
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar