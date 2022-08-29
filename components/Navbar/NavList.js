import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    { name: "Home", delay: "delay-[100ms]" },
    { name: "Team", delay: "delay-[200ms]" },
    { name: "Projects", delay: "delay-[300ms]" },
    { name: "About", delay: "delay-[400ms]" },
    { name: "Contact", delay: "delay-[500ms]" },
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
             font-semibold text-lg md:text-xl lg:text-2xl transition-all duration-[600ms] ${
               item.delay
             }
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
          font-semibold flex justify-evenly w-full text-lg transition-all delay-[600ms] duration-[600ms]
          ${
            props.toggle
              ? "px-12 py-3 border-b-2 shadow-sm -translate-x-0"
              : props.responsive
              ? "-translate-x-[100vw]"
              : "translate-x-0"
          }`}
      >
        <Link href="/" locale={router.locale === "en" ? "ar" : "en"}>
          <button
            className={`border-gray border-2 w-20 rounded-xl transition-colors text-gray-500  font-semibold py-1 ${
              router.locale === "en"
                ? "bg-gradient-to-l"
                : "bg-gradient-to-r"
            }  from-white to-prim`}
          >
            En / Ar
          </button>
        </Link>
      </li>
    </ul>
  );
}
