import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './utils/Button';
const Header = () => {
  return (
    <div className='container flex justify-between items-center'>
        <div>
            <Link to={"/"}>
                <img src={logo} className='w-28 h-28'/>
            </Link>
        </div>
        <ul className='items-center gap-x-8 text-gray4 font-medium text-sm hidden sm:flex'>
            <li className='text-green'>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
                <Link>Contact</Link>
            </li>
            <li className='hidden md:block'>
                <Button text={"ORDER NOW"}/>
            </li>
        </ul>
        <FiMenu className='text-gray4 w-5 h-5 sm:hidden'/>
    </div>
  )
}

export default Header