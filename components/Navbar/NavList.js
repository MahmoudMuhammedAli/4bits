import React from "react";

export default function NavList(props) {
  return (
      <ul className={props.parentDiv}>
        <li className={`font-semibold text-lg transition-all delay-75  duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Welcome</li>
        <li className={`font-semibold text-lg transition-all delay-100 duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Company</li>
        <li className={`font-semibold text-lg transition-all delay-150 duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Careers</li>
        <li className={`font-semibold text-lg transition-all delay-200 duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Team</li>
        <li className={`font-semibold text-lg transition-all delay-300 duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Blog</li>
        <li className={`font-semibold text-lg transition-all delay-500 duration-500 ${props.toggle ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0" : props.responsive ? "-translate-x-[100vw]" : "translate-x-0"}`}>Contact</li>
      </ul>
  );
}
