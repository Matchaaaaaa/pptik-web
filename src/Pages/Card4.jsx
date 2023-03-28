import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import Navigation from '../Components/Navigation'

export default function Card4() {
  return (
    <>
        <Navigation />
        <div className="ml-[40px] mb-[20px] pt-[100px] flex flex-row space-x-2  "><AiFillFolderOpen className='text-3xl' /><h1 className='text-2xl'>Category: Mitra</h1>
      </div>

        <div className="flex flex-row pt-32 ml-10 w-[25%] align-center justify-center">
          <img src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2023/03/WhatsApp-Image-2023-03-03-at-16.26.25-300x169.jpeg" width="500px" alt="" />
          <div className="flex flex-col ml-10 w-[40%] space-y-4 space-x-4">
            <h1 className="text-xl">Diskusi dengan Universitas Bandar Lampung Administrasi Bisnis</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate iste itaque quidem blanditiis numquam perspiciatis consequuntur? Labore, sequi sapiente.</p>
          </div>
        </div>
    </>
  )
}
