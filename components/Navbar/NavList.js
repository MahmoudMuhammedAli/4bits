import React from "react";
import { useTheme } from 'next-themes';
import { useState , useEffect } from 'react';
export default function NavList(props) {
  const [mounted , setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [])
      if(!mounted) return null 
  return (
      <ul className={`${props.parentDiv} ${theme === 'dark'? 'text-white' && 'bg-black' :'text-black' && 'bg-white'}`}>
      <li
        className={`font-semibold text-lg md:text-xl lg:text-2xl transition-all delay-75  duration-500 ${props.toggle
          ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
          : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}
      >
        Home
      </li>
      <li
        className={`font-semibold text-lg md:text-xl lg:text-2xl transition-all delay-100 duration-500 ${props.toggle
          ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
          : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}
      >
        Team
      </li>
      <li
        className={`font-semibold text-lg md:text-xl lg:text-2xl transition-all delay-150 duration-500 ${props.toggle
          ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
          : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}
      >
        Projects
      </li>
      <li
        className={`font-semibold text-lg md:text-xl lg:text-2xl transition-all delay-200 duration-500 ${props.toggle
          ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
          : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}
      >
        About
      </li>
      <li
        className={`font-semibold text-lg md:text-xl lg:text-2xl transition-all delay-300 duration-500 ${props.toggle
          ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
          : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}
      >
        Contact
      </li>
    </ul>
  );
}
