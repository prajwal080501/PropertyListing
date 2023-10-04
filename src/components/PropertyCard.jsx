import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {FcLike} from 'react-icons/fc'
const PropertyCard = ({property}) => {
  return (
    <div className='flex flex-col rounded-lg cursor-pointer hover:opacity-80 duration-200 ease-linear  justify-start bg-gray-100 w-fit px-2 p-3'>
       <div className='w-[90%] mx-auto'>
        <img src={property.image} className='w-96 rounded-lg' alt="image" />
       </div>
       <div className='flex items-center ml-2 p-3'>
        <p className='text-gray-500 text-lg font-bold'>
            <CiLocationOn className='inline-block mr-1' />
            {property.city}
        </p>
       </div>
       <div className='flex items-center ml-2'>
        <p className='text-gray-700 text-start text-3xl font-bold'>
            {property.name}
        </p>
       </div>
       <div className='w-full flex bg-white p-1 rounded-lg font-medium justify-evenly mt-4 space-x-5 items-center'>
        <div>
            {property.roomCount} rooms
        </div>
        <div>
        {property.bathRoomCount} bathrooms

        </div>
        <div>
        {property.area} sq.ft
        </div>
       </div>
     <div className='ml-2 flex mt-4 justify-between pt-4 text-xl'>
        <div>
            <span className='text-blue-600 font-medium'>
                ${property.rent}
                </span> / month
        </div>
        <div>
            <Link to={`/${property.id}`} className='bg-blue-500 py-3 px-6 rounded-lg text-white font-medium'>View</Link>

        </div>
     </div>
    </div>
  )
}

export default PropertyCard