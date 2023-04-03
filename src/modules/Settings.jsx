import React from "react";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { BsToggleOff } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex border-b-2 border-black h-16 p-2 items-center justify-between">
        <button onClick={() => navigate("/")}>
          <AiFillHome className="h-10 w-10" />
        </button>
        <span className="text-3xl">Settings</span>
        <button onClick={() => navigate("/")}>
          <AiOutlineRight className="w-12 h-12" />
        </button>
      </div>
      <div className="bg-blue-600 h-7 flex justify-end"></div>
      <ul className="flex items-center flex-col">
        <li className="flex p-2 gap-5 m-5 bg-blue-600 w-4/5 text-3xl font-bold text-white">
          <div>Darkmode</div>
          <button className="ml-auto">
            <BsToggleOff className="w-10 h-10" />
          </button>
        </li>
      </ul>
    </>
  );
}

export default Settings;
