import React, { useContext } from 'react'
import { Cities } from '../data/data'
import { TabContext } from '../context/TabContext';

const Header = () => {
    const {activeTab, changeTab} = useContext(TabContext);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-4xl'>Featured Property</h1>
                <p className=' w-1/2 font-extralight text-lg tracking-wider text-center text-gray-700 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id esse architecto laudantium est voluptates itaque ullam sit repellendus atque distinctio. Doloremque nostrum incidunt corrupti! Dolor itaque aut voluptates? Facilis, molestiae.</p>
            </div>
            <div className='w-full flex items-center justify-center py-5 mt-4'>
                <div className='flex space-x-5'>
                    {
                        Cities.map((city, index) => (
                            <button 
                            key={index}
                            onClick={() => changeTab(city.city)}
                            className='bg-blue-500 py-3 px-6 rounded-lg text-white font-medium'>{city.city}</button>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header