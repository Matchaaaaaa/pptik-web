import React from 'react';
import hero from '../Assets/hero.png'

const Slide = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-[50px] p-[50px]">
      <div className="flex-col space-y-10 w-1/2">
        <h1 className='text-5xl font-semibold'>PPTIK. ID</h1>
        <h1 className="text-lg">Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</h1>
        {/* <button className="bg-main rounded-full px-[15px] py-[10px]">Get Started</button> */}
      </div>
      <div className="flex-col space-y-16 w-1/3">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Slide