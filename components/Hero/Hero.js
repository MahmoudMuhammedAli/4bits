// import HeroTitle from "./HeroTitle";
import Image from "next/image";
// import randomImage from "../../assets/img/randomImage.jpg";
import dynamic from "next/dynamic";

const HeroTitle = dynamic(()=>import('./HeroTitle'));

export default function Hero() {
  return (
    <div classNameName="flex items-center justify-center py-40">
      <div className="flex flex-col w-[100%]  my-30">
        <HeroTitle />
        <div className=" bg-[url('https://placeimg.com/1000/800/arch')] bg-cover bg-no-repeat  w-[100%] h-[50vh]">
          <HeroTitle className="sm:hidden" />
        </div>
      </div>
    </div>
  );
}
