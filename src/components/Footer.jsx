import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { GiSpellBook } from "react-icons/gi";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12 " >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

                    {/* Company Info */}
                    <div className='float-end'>
                        <h2 className="text-2xl font-bold mb-4 text-white">The Official <span className='text-primary '>BookStore</span></h2>
                        <h1 className='text-9xl'><GiSpellBook /></h1>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A complete bookstore to add manage purchase and user friendly
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition font-semibold">Home</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">Services</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">Contact</a></li>
                        </ul>
                    </div>
                    {/* Guides */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition font-semibold">Home</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">Services</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition font-semibold">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch With Us</h3>

                        <div className="flex items-center justify-center md:justify-start">
                            <input type="email" placeholder="Your email" className="px-3 py-2 w-full rounded bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 ms-3 rounded transition-all">
                                <IoSend size={18} />
                            </button>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4 mt-5">
                            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
                                <FaFacebookF size={23} />
                            </a>
                            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
                                <FaTwitter size={23} />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
                                <FaInstagram size={23} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition">
                                <FaLinkedinIn size={23} />
                            </a>
                            <a href="https://github.com" target="_blank" className="hover:text-gray-600 transition">
                                <FaGithub size={23} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
                    &copy;2025 BookiFy. All rights reserved by Ashik.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
