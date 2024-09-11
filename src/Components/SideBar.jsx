import React from "react";
import logo from "../assets/mysoundNewLogo7.svg";
import appStore from "../assets/AppStore.svg";
import gplay from "../assets/GooglePlay.png";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdMusicVideo } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import playlist from "../assets/music-square-add.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
const SideBar = () => {
  return (
    <div className="bg-sideBg text-sideText w-[20vw] h-full pl-10">
      <img src={logo} alt="" className="pt-4" />
      <div className="mt-10">
        <div>
          <h2>MENUE</h2>
          <nav className="my-5">
            <ul className="grid gap-4">
              <li className="hover:text-hoverGreen hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <CiHome size={20} /> Home
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <CiSearch size={20} /> Search
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <FaRegHeart size={20} /> Likes{" "}
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <img src={playlist} alt="" /> Playlist
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <MdMusicVideo size={20} /> Albums
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen  flex text-base gap-4">
                <CiUser size={20} /> Followings
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>GENERAL</h2>

          <nav className="my-5">
            <ul className="grid gap-4">
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <IoSettingsOutline /> Settings
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <LuCrown /> Subscription
              </li>
              <li className="hover:text-hoverGreen  hover:border-r-2 w-full border-hoverGreen flex text-base gap-4">
                <RxExit /> Sign out
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-20">
          <h3 className="py-4">GET MOBILE APP</h3>
          <div className="flex gap-4">
            <img src={appStore} alt="" className="w-20" />
            <img src={gplay} alt="" className="w-20" />
          </div>
          <p className=" text-[10px] w-48 mt-6">
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart <span className=" text-blue-700">Language: </span>
            <span className="font-bold"> English (US)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
