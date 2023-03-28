import React from 'react'
import Navigation from '../Components/Navigation'
import { AiFillFolderOpen }  from 'react-icons/ai'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const Mitra = () => {
  return (
    <>
      <Navigation />
      <div className="ml-[40px] pt-[100px] flex flex-row space-x-2"><AiFillFolderOpen className='text-3xl' /><h1 className='text-2xl'>Category: Mitra</h1>
      </div>
      <Card />
      <Footer />
    </>
  )
}

export default Mitra