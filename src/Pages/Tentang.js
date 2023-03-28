import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineTeam } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { MdComputer } from 'react-icons/md'
import { GrGroup } from 'react-icons/gr'

const Tentang = ()=> {
  return (
    <>
    <Navigation />
    <div className="flex flex-col">
      <span className="ml-10  mt-[100px] text-2xl">Tentang PPTIK</span>
      <span className="border-b-4 ml-10 border-black w-40"></span>
    </div>
    <div className="justify-center items-center flex flex-row pt-[40px]">
    <img src="http://pptik.itb.ac.id/wp-content/uploads/sites/119/2016/06/logo-PPTIK-baru-300x300.jpg" alt="" />
    <div className="flex flex-col w-1/2">
    <span className="ml-10 text-2xl">Profile PPTIK</span>
      <p className='ml-[50px]'>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</p>
    </div>
    </div>
    <div className="flex flex-col">
    <span className="ml-10  mt-[50px] text-2xl">Kemitraan</span>
      <p className='ml-[50px] mt-[10px]'>Dalam proses pengembangan riset-riset tersebut, PPTIK telah menjalin kerjasama dengan beberapa pihak diantaranya KPU, KPUD Jawa Barat, Bawaslu Jawa Barat, Zamrud technology, Persatuan Radio Siaran Swasta Nasional Indonesia (PRSSNI) Kotamadya Bandung, Yayasan Penelitian dan Pengembangan Telematika Indonesia (YPPTI), Microsoft Indonesia, NTT Data, Sampoerna Telekomunikasi Indonesia, Dinas Kesehatan PALU Sulawesi Tengah, Badan Meterologi, Klimatologi dan Geofiisika (BMKG), Eon Reality Group, Pusat Penelitian Geoteknologi LIPI, MIT USA, Keio University, Universitas Telkom dan Universiti Teknologi Malaysia (UTM), Japan Smart Community Alliance, Yayasan Keanekaragaman Hayati Indonesia (KEHATI), International Rhino Foundation (IRF), Anargya Technology, PT. Westpoint Security Indonesia, Bapeda Kotamadya Bandung, Dinas Perhubungan Kota Bandar Lampung, Bstartup dan lainnya. Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Kemenristekdikti, dll.</p>
    </div>
    <div className="flex flex-col justify-center items-center">
    <span className="ml-10  mt-[50px] text-2xl">Jasa Layanan</span>
    <div className="flex flex-row justify-center items-center space-x-[40px] pt-[40px]">
    <div className="flex flex-col justify-center items-center">
      <FaSearch className='text-xl' />
      <h2 className='mt-[10px]  text-xl'>Penelitian dalam penerapan TIK</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
      <AiOutlineTeam className='text-xl'/>
      <h2 className='mt-[10px] text-xl'>Kerjasama Industri</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
      <BiLike className='text-xl'/>
      <h2 className='mt-[10px] text-xl'>Konsultasi</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
      <MdComputer className='text-xl'/>
      <h2 className='mt-[10px] text-xl'>Inkubasi Startup</h2>
      </div>
      </div>
    </div>
    <div className="flex flex-row justify-center items-center grid-cols-2 mt-[50px] mb-[50px] space-x-[40px] pt-20 pb-5">
    <div className="flex flex-col justify-center items-center w-[60%]">
      <GrGroup className='text-2xl'/>
      <h1 className="text-2xl">Visi</h1>
      <p className='ml-[20px]'>Setiap warga negara Indonesia harus dapat memanfaatkan TIK untuk kemajuan perikehidupannya. Setiap warganegara dapat berpartisipasi dalam masyarakat pengetahuan dan ekonomi pengetahuan, baik ikut mendapatkan manfaatnya maupun ikut membangunnya. Di tahun 2016 setiap warga negara Indonesia harus bisa mendapatkan jatah secara cuma-cuma.</p>
    </div>
    <div className="flex flex-col justify-center items-center w-[40%]">
    <GrGroup className='text-2xl'/>
      <h1 className="text-2xl">Misi</h1>
      <li className='ml-[20px]'>Membangun reputasi riset dan peneliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT.</li>
      <li className='ml-[20px]'>Mendorong perkembangan produk komersial, enterpreneurship, dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</li>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Tentang