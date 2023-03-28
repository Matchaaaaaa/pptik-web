import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navigation'
import Slide from '../Components/Slide'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col w-full pt-[100px]'>
                <Slide />
            </div>
            <Card />
            <Footer />
        </>
    )
}

export default Home