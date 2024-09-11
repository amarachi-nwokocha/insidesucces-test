import React from 'react'
import song from '../assets/group21.svg'
import { FaBackwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import '../App.css'
const Player = () => {
  return (
    <div className='px-14 py-8 flex items-center'>
        <div className='flex items-center'>
            <img src={song} alt="" className='rounded-md' />
            <div className='px-4'>
            <p>Good days</p>
            <p className='text-sm text-sideText'>SZA</p>
            </div>
        </div>
        <div>
        <div className='flex items-center gap-4 text-hoverGreen'>
            < FaBackwardStep size={20}/>
            <FaBackward size={20}/>
            <span className='bg-hoverGreen text-black rounded-full p-2'>
                <FaPlay  size={15}/>
            </span>
            <FaForward size={20}/>
            <FaStepForward size={20}/>
        </div>
        <input type="range" className='w-[15rem] h-1 rounded-sm cursor-pointer bg-hoverGreen' id='slider' />
       <div className="flex text-[10px] justify-between text-sideText">
       <p>1:21</p>
       <p>-2:36</p>
       </div>
        </div>
    </div>
  )
}

export default Player