import {IoLogoTwitter} from 'react-icons/io';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {BsLinkedin} from 'react-icons/bs';
export default function Footer(){
    return(
        <footer className="flex flex-col bg-black text-white font-semibold   text-sm sm:text-xl">
            <ul className="flex  p-5 w-[30%] m-auto justify-evenly">
                <li className="px-6">About</li>
                <li className="px-6">Contact</li>
                <li className="px-6">jobs</li>
            </ul>
            <div className="flex gap-10 m-auto text-xl sm:text-3xl ">
                <IoLogoTwitter/>
                <RiFacebookCircleFill/>
                <BsLinkedin/>
            </div>
            <div className=" p-5 m-auto">
                <p>Copyright © 2022 - All right reserved</p>
            </div>           
        </footer>
    );
}