import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import NavList from "./NavList";

export default function Navbar() {
  
  const [ toggleMenu, editToggleMenu ] = useState(false);

  return (
    <div className="w-full h-[8vh] fixed z-[100] bg-white">
      <div className="px-[10vw] h-[8vh] py-4 flex items-center justify-between w-full md:shadow-md">
        <div className="text-black text-xl font-bold">Four_Bits</div>
        <button className="block md:hidden" onClick={() => editToggleMenu(!toggleMenu)}>
          <div className="flex justify-center items-center rounded-md w-10 h-10 text-xl">{toggleMenu ? "X" : <BiMenu className="text-2xl"/>}</div>
        </button>
        <NavList parentDiv="z-[100] hidden md:flex md:flex-row gap-4" responsive={false} />
      </div>
      <NavList toggle={toggleMenu} responsive={true} parentDiv={`z-[100] flex flex-col gap-4 w-screen bg-white transition absolute md:hidden fixed top-[8vh] ${toggleMenu? "h-[92vh] fixed" : "h-0 transition-all delay-500"}`}/>
    </div>
  );
} 
