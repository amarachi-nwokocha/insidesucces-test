import React from "react";
import user from '../assets/userImg.svg'
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
  return (
    <div>
    <div className='flex justify-between m-4 items-center w-[68vw] '>
        <h1  className=" text-xl">Playlists</h1>
       <div className="flex items-center">
       <img src={user} alt="" />
       <div className="px-4">
       <p className="text-sm">Ola Ugo</p>
       <p className="text-xs text-sideText">premium</p>
       </div>
      <FaChevronDown size={17} className=""/>
       </div>
    </div>
    </div>
  )
}

export default Header