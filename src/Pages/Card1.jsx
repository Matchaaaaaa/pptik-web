import React from 'react'
import Navigation from '../Components/Navigation'
import { AiFillFolderOpen } from 'react-icons/ai'

export default function Card1() {
  return (
    <>
        <Navigation />
        <div className="ml-[40px] mb-[20px] pt-[100px] flex flex-row space-x-2  "><AiFillFolderOpen className='text-3xl' /><h1 className='text-2xl'>Category: Mitra</h1>
      </div>

        <div className="flex flex-row pt-32 ml-10 pb-36 pt-[40px] w-[25%] align-center justify-center ">
          <img src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2023/03/WhatsApp-Image-2023-03-06-at-19.32.30-520x245.jpeg" alt="" />
          <div className="flex flex-col ml-10 w-[40%] space-y-4 space-x-4">
            <h1 className="text-xl">Diskusi Kolaborasi Daerah dan PPTIK</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate iste itaque quidem blanditiis numquam perspiciatis consequuntur? Labore, sequi sapiente.</p>
          </div>
        </div>
    </>
  )
}
