import React from 'react'
import List from '../components/List'
import Header from '../components/Header'

const Home = () => {
    return (
        <div className='flex flex-col mt-5 justify-center py-4 px-3'>
            <Header />

            <hr className='p-4 w-[90%] mx-auto' />
            <div className='max-w-[90%] mx-auto'>
                <List />
            </div>
        </div>
    )
}

export default Home