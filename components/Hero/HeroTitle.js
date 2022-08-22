export default function HeroTitle(props) {
  const { className } = props;
  return (
    <div
      className={`${className}  sm:flex w-full   flex-row items-end justify-around border-solid md:py-40 `}
    >
      <h1 className=" sm:w-[30%] text-white sm:text-black text-6xl mt-8 font-black">
        See our planet better.
      </h1>
      <p className="sm:w-[30%] text-2xl sm:text-3xl mt-8 text-white sm:text-prim">
        Geospatial solutions and global insights for a complex and changing
        planet.
      </p>
    </div>
  );
}
