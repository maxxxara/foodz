import React from 'react'
import img1 from '../../images/items/1.png'
import img2 from '../../images/items/2.png'
import img3 from '../../images/items/3.png';
import { FiStar } from 'react-icons/fi';
import Button from './../utils/Button';
import { Link } from 'react-router-dom';
const Item = ({product}) => {
  return (
    <Link to={"/single/" + product.id}>
    <div className='bg-white shadow-2xl sm:px-8 rounded-2xl pb-12 flex flex-col items-center py-5'>
        <img src={require(`../../products/${product.image}`)} className='w-50 h-50'/>
        <div className='mt-4'>
            <h4 className='font-alice text-black text-3xl sm:text-2xl'>{product.title}</h4>
            <div className='mt-2 flex items-center gap-x-2'>
                <FiStar className='stroke-green fill-green'/>
                <FiStar className='stroke-green fill-green'/>
                <FiStar className='stroke-green fill-green'/>
                <FiStar className='stroke-green fill-green'/>
                <FiStar className='stroke-green fill-green'/>
                <p className='ml-2 text-xs mt-[4px]'>{product.reviews} Reviews</p>
            </div>
            <p className='text-sm text-gray3 mt-2'>Excellent flavor for your preference with:</p>
            <ul className='list-disc text-xs text-gray3 pl-6 mt-1'>
                {product.flavor.slice(0, 3).map(item => (
                    <li>{item}</li>
                ))}
                {/* <li>Spicy</li> */}
                {/* <li>Honeyed sugary</li> */}
            </ul>
            <div className='flex items-center justify-between mt-2'>
                <p className='font-alice text-[28px] text-green'>${product.price}</p>
                <Button text={"ORDER NOW"}/>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item