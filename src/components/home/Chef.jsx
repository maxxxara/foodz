import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../images/chef.svg';
const Chef = () => {
  return (
    <div className='container pt-10'>
        <h1 className='font-alice text-4xl text-center'>19 <span className='font-alice text-green'>Michelin</span> Stars Chef</h1>
        <div className='grid grid-cols-1 mt-24 lg:grid-cols-2 lg:gap-x-16'>
            <img src={img1} className='w-full h-full'/>
            <div>
                <div className='flex flex-col mt-8'>
                    <p className='font-alice text-green'>Alain Ducasse – 19 Michelin Stars</p>
                    <Link className='font-alice text-green mt-2'>View All Restaurant</Link>
                </div>
                <p className='text-gray3 mt-4'>Considered by many to be one of the best chefs in the world, he’s built a business empire over the years with 36 restaurants spanning across the globe. He’s also one of only two chefs to hold 21 Michelin stars throughout his career and the first chef to own restaurants carrying three Michelin Stars in three cities. <br /> <br /> In addition to being known for world-class French cuisine, Ducasse is the only chef on this list who has sent his food into space. In 2015, Ducasse sent meals to astronauts orbiting Earth aboard the International Space Station, an accomplishment that Ducasse said he viewed as conquering ‘ the final frontier (of cooking)’.</p>
            </div>
        </div>
    </div>
  )
}

export default Chef