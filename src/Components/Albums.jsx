import React from "react";
import drake from '../assets/img1.svg'
import rema from '../assets/img2.svg'
import arya from '../assets/img3.svg'
import music from '../assets/img4.svg'
import global from '../assets/img5.svg'
import burna from '../assets/img6.svg'
import g11 from '../assets/group11.svg'
import g12 from '../assets/group12.svg'
import g13 from '../assets/group13.svg'
import g14 from '../assets/group14.svg'
import g21 from '../assets/group21.svg'
import g22 from '../assets/group22.png'
import g23 from '../assets/group23.svg'
import g24 from '../assets/group24.svg'
const Albums = () => {
  return (
    <div className="w-[42rem] bg-[#2c2c2c] ml-10 rounded-xl px-10 py-4  h-[30rem]">
      <div>
        <input
          type="text"
          placeholder="Search in Albums"
          className="w-[35rem] h-8 p-4 bg-sideBg text-sm opacity-4 text-white border-2 border-[#2c2c2c] outline-none rounded-md"
        />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-4">
      <div className="">
        <img src={drake} alt="" />
        <p>Back in Time</p>  
      </div>
      <div className="">
        <img src={rema} alt="" />
        <p>Cool Vibes</p>  
      </div>
      <div className="">
        <img src={arya} alt="" />
        <p>Afrobeats 2024</p>  
      </div>
      <div className="">
        <img src={burna} alt="" />
        <p>Party Time</p>  
      </div>
      <div className="">
        <img src={global} alt="" />
        <p>Global Mix</p>  
      </div>
      <div className="grid grid-cols-2">
        <img src={g11} alt="" />
        <img src={g12} alt="" />
        <img src={g13} alt="" />
        <img src={g14} alt="" />
      </div>
      <div className="grid grid-cols-2">
        <img src={g21} alt="" />
        <img src={g22} alt="" />
        <img src={g23} alt="" />
        <img src={g24} alt="" />
      </div>
      <div className="">
        <img src={music} alt="" />
        <p>Party Time</p>  
      </div>
      </div>
    </div>
  );
};

export default Albums;
