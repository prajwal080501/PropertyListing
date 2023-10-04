import React, { useContext } from 'react'
import PropertyCard from './PropertyCard'
import { Properties } from '../data/data'
import { TabContext } from '../context/TabContext';
import { Link } from 'react-router-dom';

const List = () => {
    const { activeTab, changeTab } = useContext(TabContext);
    console.log(activeTab);
    return (
        <div className='grid grid-cols-2 gap-5 lg:grid-cols-3'>
            {
                Properties.filter(property => property.city === activeTab).map((property, index) => (
                    <Link to={`/${property.id}`}>
                        <PropertyCard key={index} property={property} />
                    </Link>

                ))
            }
        </div>
    )
}

export default List