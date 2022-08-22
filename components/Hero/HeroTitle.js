export default function HeroTitle(props) {
    return (
        <div className={`w-[80%]  text-3xl font-bold items-center  m-auto border-solid py-10 ${props.className}`}>
            <h1 className="sm:w-[40%] text-red-600 text-4xl mt-3">See our planet better.</h1>
            <p className="sm:w-[40%] font-bold opacity-75 mt-3 text-white sm:text-black">
                Geospatial solutions and global insights for a complex and changing
                planet.
            </p>
        </div>
    );
}