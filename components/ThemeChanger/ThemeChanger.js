import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
const ThemeChanger = () => {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className=" flex justify-center font-bold items-center   ">
      <button
        className="p-2 text-2xl"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <MdLightMode className="font-bold text-red-500 text-2xl" />
        ) : (
          <MdDarkMode className="font-bold text-red-500 text-2xl" />
        )}
      </button>
    </div>
  );
};
export default ThemeChanger;
