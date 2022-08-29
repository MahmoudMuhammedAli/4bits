import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import { useTheme } from "next-themes";
import { useTranslation, i18n } from "next-i18next";
import { useRouter } from "next/router";

export default function NavList(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const menuList = [
    { name: "Home", delay: 75 },
    { name: "Team", delay: 200 },
    { name: "Projects", delay: 300 },
    { name: "About", delay: 500 },
    { name: "Contact", delay: 700 },
  ];
  return (
    <ul
      className={`${props.parentDiv} ${
        theme === "dark"
          ? "text-white" && "bg-black"
          : "text-black" && "bg-white"
      }`}
    >
      {menuList.map((item, index) => {
        return (
          <li
            key={index}
            className={`
             font-semibold text-lg md:text-xl lg:text-2xl transition-all duration-500 delay-${item.delay}
             ${
               props.toggle
                 ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
                 : props.responsive
                 ? "-translate-x-[100vw]"
                 : "translate-x-0"
             }`}
          >
            {item.name}
          </li>
        );
      })}

      <li
        className={`
          font-semibold flex justify-evenly w-full text-lg md:text-xl lg:text-2xl transition-all delay-300 duration-500 
          ${
            props.toggle
              ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
              : props.responsive
              ? "-translate-x-[100vw]"
              : "translate-x-0"
          }`}
      >
        <Link href="/" locale={router.locale === "en" ? "ar" : "en"}>
          <button className="w-20 rounded-xl bg-prim text-white font-semibold py-1">
            {t("change-locale", {
              changeTo: router.locale === "en" ? "ar" : "en",
            })}
          </button>
        </Link>
        <ThemeChanger />
      </li>
    </ul>
  );
}
