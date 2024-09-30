import React from 'react'
import logo from "../assets/my_logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-16 rounded-full' src={logo} alt="Logo" />
            </div>

            <div className="md:flex flex-shrink-0 items-center justify-between gap-8 hidden md:display">
                <a href='#home' className='cursor-pointer hover:text-yellow-500'>Home</a>
                <a href='#experience' className='cursor-pointer hover:text-yellow-500'>Experience</a>
                <a href='#project' className='cursor-pointer hover:text-yellow-500'>Projects</a>
                <a href='#contact' className='cursor-pointer hover:text-yellow-500'>Contact</a>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaFacebook />
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
