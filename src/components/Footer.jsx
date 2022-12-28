import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-28 border border-[#E6E8EC] pt-16 pb-16'>
        <div className='container grid grid-cols-2 gap-10 md:grid-cols-4 justify-items-center text-sm'>
            <div className='flex flex-col items-center'>
                <img src={logo} />
                <p className='text-sm text-center mt-4 text-gray4'>Explore your Taste with speacial food in the special place, that will make you happy. I try to write some thing without lorem isum.</p>
            </div>
            <ul className='text-gray4 space-y-4 text-sm'>
                <li className='text-black font-medium text-md'>
                    <Link>Support</Link>
                </li>
                <li><Link>Help Centre</Link></li>
                <li><Link>Safety information</Link></li>
                <li><Link>Cancellation options</Link></li>
                <li><Link>Report Complaint</Link></li>
            </ul>
            <ul className='text-gray4 space-y-4 text-sm'>
                <li className='text-black font-medium text-md'>Community</li>
                <li><Link>Customer Review</Link></li>
                <li><Link>Newsletter</Link></li>
            </ul>
            <ul className='text-gray4 space-y-4 text-sm'>
                <li className='text-black font-medium text-md'>About</li>
                <li><Link>Our Chef</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer