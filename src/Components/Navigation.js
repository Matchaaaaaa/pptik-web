import React from 'react'
import logo from '../Assets/logo.png'
import * as te from 'tw-elements';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="w-full p-2 px-5 flex flex-row justify-center items-center bg-main fixed top-0 left-0 z-[90]">
      <div className="flex flex-row items-center ">
        <img src={logo} alt="" width={50} />
      </div>
      <div className="flex flex-row justify-center items-center pl-[100px] space-x-4">
        <Link to="/"><h1 className="text-whiteA transition text-xs hover:text-white">HOME</h1></Link>
        <div className="group inline-block">
          <button
            className="outline-none focus:outline-none  py-1 bg-main rounded-sm flex items-center min-w-16"
          >
            <span className=" text-whiteA transition text-xs hover:text-white flex-1">KEGIATAN</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180 text-whiteA
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-main  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-[100px]"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Riset</li>
            <li className="rounded-sm px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Riset</li>
          </ul>
        </div>
        <div className="group inline-block">
          <button
            className="outline-none focus:outline-none  py-1 bg-main rounded-sm flex items-center min-w-16"
          >
            <span className=" text-whiteA transition text-xs hover:text-white flex-1">KARYA</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180 text-whiteA
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-main  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-40"
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">
              <button
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Smart System</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-main  rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-[200px]
  "
              >
                <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Smart Health System</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Smart Learning</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-main  rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                  >
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Tugas Akhir Jaringan</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Vidyanusa </li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">PND Online Course</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Open Data Course </li>
                  </ul>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Transportasi</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-main  rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                  >
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">BSTS</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">BLITS</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">TLITS</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">BPG</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">System Moving Block KA</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">System Autodrive</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Mobil Listrik</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Simulator Lokomotif</li>
                  </ul>
                </li>
                <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Kesehatan</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Indonesia United</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-main  rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                  >
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Idun Nelayan</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">DPR Kita</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Pemilu</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Smart Vertical Agriculture</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Radio Bandung</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Detektor Gempa</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Tari Tradisional</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Flora & Fauna</li>
                  </ul>
                </li>
                <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Brain Computer Interface</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Advance Robotics & Automation</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-main  rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                  >
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">ROV</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Seaglider</li>
                    <li className="px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Lumen Robot Friend</li>
                  </ul>
                </li>
              </ul>

            </li>
            <li className="rounded-sm px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Riset</li>
          </ul>
        </div>
        <Link to="/mitra"><h1 className="text-whiteA transition text-xs hover:text-white">MITRA</h1></Link>
        <Link to="/galery"><h1 className="text-whiteA transition text-xs hover:text-white">GALERI</h1></Link>
        <Link to="/tentang"><h1 className="text-whiteA text-xs transition hover:text-white">TENTANG</h1></Link>
        <div className="group inline-block">
          <button
            className="outline-none focus:outline-none  py-1 bg-main rounded-sm flex items-center min-w-16"
          >
            <span className=" text-whiteA transition text-xs hover:text-white flex-1">ABSTEIN</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180 text-whiteA
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-main  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-[100px]"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-cyan-700 text-whiteA text-xs">Modul Belajar</li>
          </ul>
        </div>
        <Link to="/peneliti"><h1 className="text-whiteA text-xs transition hover:text-white">PENELITI & STAFF</h1></Link>
        <Link to="/kontak"><h1 className="text-whiteA text-xs transition hover:text-white">KONTAK</h1></Link>
      </div>
    </div>
  )
}

export default Navigation