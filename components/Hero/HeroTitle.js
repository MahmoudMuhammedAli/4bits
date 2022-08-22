export default function HeroTitle(props) {
  const { className } = props;
  return (
    <div
      className={`${className} hidden sm:flex w-full  text-3xl  flex-row items-end justify-around border-solid md:py-40 `}
    >
      <h1 className=" sm:w-[30%] text-black text-7xl mt-3 font-black">
        See our planet better.
      </h1>
      <p className="sm:w-[30%]  mt-3 text-white sm:text-prim">
        Geospatial solutions and global insights for a complex and changing
        planet.
      </p>
    </div>
  );
}
