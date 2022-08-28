import { BiMenu } from "react-icons/bi";
import NavList from "./NavList";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslation, i18n } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const [toggleMenu, editToggleMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`w-full h-[8vh] fixed z-[100] ${
        theme === "dark"
          ? "text-white" && "bg-black"
          : "text-black" && "bg-white"
      }`}
    >
      <div className="px-[10vw] h-[8vh] py-4 flex items-center justify-between w-full ">
        <div className="text-prim text-4xl font-bold">
          Four<span className="font-mono text-gray-500  ">Bits</span>
        </div>
        <button
          className="block md:hidden"
          onClick={() => editToggleMenu(!toggleMenu)}
        >
          <div className="flex justify-center items-center rounded-md w-10 h-10 text-xl">
            {toggleMenu ? "X" : <BiMenu className="text-2xl" />}
          </div>
        </button>
        <NavList
          parentDiv="z-[100] hidden md:flex md:flex-row gap-4"
          responsive={false}
        />
      </div>
      <NavList
        toggle={toggleMenu}
        responsive={true}
        parentDiv={`z-[100] flex flex-col gap-4 w-screen bg-white transition absolute md:hidden fixed  top-[7vh] ${
          toggleMenu ? "h-[93vh] fixed" : "h-0 transition-all delay-500"
        }`}
      />
    </div>
  );
}
