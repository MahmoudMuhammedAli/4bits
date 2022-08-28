
import { useTheme } from 'next-themes';
import { useState , useEffect } from 'react';

export default function HeroTitle(props) {
  const [mounted , setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {className} = props;

  useEffect(() => setMounted(true), [])
      if(!mounted) return null 
  return (
    <div
      className={`${className}  sm:flex w-full flex-col sm:flex-row items-center   p-5 sm:justify-around border-solid sm:py-20 `}
    >
      <h1 className={`sm:w-[30%]  ${theme === 'dark' ? 'text-white' : 'text-black'}  text-5xl mt-5 font-black`}>
        See our planet better.
      </h1>
      <p className="sm:w-[30%] text-xl sm:text-3xl mt-5 text-white sm:text-prim">
        Geospatial solutions and global insights for a complex and changing
        planet.
      </p>
    </div>
  );
}
