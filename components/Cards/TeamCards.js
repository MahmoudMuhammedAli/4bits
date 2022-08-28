import React from "react";
import Image from "next/image";

export default function TeamCard(props) {
  return (
    <div
      className="h-[450px] bg-white flex items-stretch  flex-shrink-0 mx-7 w-[130vw] sm:w-full md:w-10/12 lg:w-5/12 max-h rounded-2xl"
      style={{ boxShadow: "5px 5px 20px #ccc" }}
    >
      <div className="flex w-[150%]">
        <Image
          src={props.imageSrc}
          className="object-cover rounded-l-2xl w-full"
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
