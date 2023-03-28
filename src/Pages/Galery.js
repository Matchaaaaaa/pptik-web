import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'

const Galery = ()=> {
  return (
    <>
    <div>
    <Navigation />
            <div className='judul'>
            <h1>Gallery</h1>
            <span></span>
            <div className="kartu pt-[20px]" id="GALLERY">
                <div className="kartu-atas">
                    <div className="kartu1"></div>
                    <div className="kartu2"></div>
                    <div className="kartu2"></div>
                </div>
                <div className="kartu-bawah">
                    <div className="kartu3"></div>
                    <div className="kartu4"></div>
                    <div className="kartu4"></div>
                </div>
            </div>
            </div>
            
    </div>
    <Footer />
    </>
  )
}

export default Galery