import React from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState , useEffect } from 'react';
export default function TeamCard(props) {
  const [mounted , setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [])
      if(!mounted) return null 
  return (
    <div
      className={`h-[450px] ${theme === 'dark' ? 'text-black' : 'text-black'} bg-white flex items-stretch grow flex-shrink-0 mx-7 w-[130vw] sm:w-full md:w-10/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 max-h rounded-2xl`}
      style={{ boxShadow: "5px 5px 20px #ccc" }}
    >
      <div className="flex w-[150%]">
        <Image
          src={props.imageSrc}
          className="object-cover rounded-l-2xl"
          alt=""
        />
      </div>
      <div className="flex flex-col p-8">
        <h1 className="text-3xl font-bold w-[70%] mb-5">{props.name}</h1>
        <p className="p-5 text-xl font-medium text-gray-600">{props.body}</p>
      </div>
    </div>
  );
}
