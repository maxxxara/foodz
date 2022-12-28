import React from 'react'
import Button from './../utils/Button';
import { Link } from 'react-router-dom';
import img from '../../images/hero.svg';
import img2 from '../../images/hero2.png';
const Hero = () => {
  return (
    <div className='container flex flex-col items-center justify-center md:justify-between md:flex-row pt-6'>
        <div className='text-center mr-12 md:text-left md:pr-4 md:w-1/2'>
            <h1 className='font-alice text-4xl leading-[58px] md:text-5xl md:w-[500px] md:leading-[64px]'>You've Got Questions. We've Got Taste.</h1>
            <p className='text-gray4 text-sm my-5 lg:w-96 leading-7'>Explore your Taste with speacial food in the special place. This text don’t have any meaning</p>
            <div className='flexitems-center md:mt-10'>
                <Link to={"/menu"}>
                <Button text={"ORDER NOW"} />
                </Link>
                <Link to={"/menu"} className='ml-6 text-md text-green font-medium'>Explore Menu</Link>
            </div>
            <div className='hidden md:flex items-center bg-gray7 w-fit px-4 py-4 mt-12 rounded-2xl'>
                <div className='text-center border-r border-gray6 pr-4 text-gray4'>
                    <p className='font-semibold text-xl'>9+</p>
                    <p className='mt-2 text-md'>years of service.</p>
                </div>
                <div className='text-center pl-4 text-gray4'>
                    <p className='font-semibold text-xl'>120+</p>
                    <p className='mt-2 text-md'>Store in the world.</p>
                </div>
            </div>
        </div>
        <div className='mt-0 sm:mt-12 relative'>
            {/* <img src={img2} className='hidden sm:block absolute -right-20 w-18 h-18'/> */}
            <img src={img} className='w-[600px] h-[400px]'/>
        </div>
        <div></div>
    </div>
  )
}

export default Hero