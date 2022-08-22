import HeroTitle from "./HeroTitle";
import Image from "next/image";
// import randomImage from "../../assets/img/randomImage.jpg";
export default function Hero() {
    return (
        <div className="flex flex-col w-[100%] m-auto">
                <HeroTitle className="hidden sm:flex sm:flex-row sm:justify-between "/>                
                <div className=" bg-[url('https://placeimg.com/1000/800/arch')] bg-cover bg-no-repeat  w-[100%] h-[50vh]">
                    <HeroTitle className="sm:hidden"/>
                </div> 
        </div>
    );
}