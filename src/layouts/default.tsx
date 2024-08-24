import IMG from "../../public/nike.ico";
import { IoIosGlobe } from "react-icons/io";
import { Navbar } from "@/components/navbar";
import {FaInstagram , FaTelegram , FaTwitter , FaLinkedin} from 'react-icons/fa'

export default function DefaultLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className={`container mx-auto max-w-7xl px-6 flex-grow pt-16 `}>
        {children}
      </main>
      <footer className=" flex flex-col  justify-left px-16 py-3 S-footer  sm:px-40 sm:justify-center S-shadow">
        <img src={IMG} className="sm:hidden" width={60} />
        <div className="w-100 flex flex-col justify-center py-3 S-footer justify-left gap-10 sm:flex-row sm:gap-40 ">
        <div className="S-footer-container">
          <h1 className="text-3xl font-bold mb-5">Featured</h1>
          <p className="font-semibold ">Air Force 1</p>
          <p className="font-semibold ">Jordan 1</p>
          <p className="font-semibold ">Mecton</p>
          <p className="font-semibold ">Air Max 270</p>
          <p className="font-semibold ">Blazer</p>
          <p className="font-semibold ">Pegasus</p>
        </div>
        <div className="S-footer-container">
          <h1 className="text-3xl font-bold mb-5">Shoes</h1>
          <p className="font-semibold ">All Shoes</p>
          <p className="font-semibold ">Jordan Shoes</p>
          <p className="font-semibold ">Basketball Shoes</p>
          <p className="font-semibold ">Soccer Shoes</p>
          <p className="font-semibold ">Sale Shoes</p>
        </div>
        <div className="S-footer-container">
          <h1 className="text-3xl font-bold mb-5">Clothing</h1>
          <p className="font-semibold ">All Clothing</p>
          <p className="font-semibold ">Tops & T-Shirts</p>
          <p className="font-semibold ">Shorts</p>
          <p className="font-semibold ">Hoodies</p>
          <p className="font-semibold ">Socks</p>
          <p className="font-semibold ">Yoga</p>
          <p className="font-semibold ">NikeLab</p>
        </div>
        </div>
        <div className="flex gap-5 my-10 text-3xl text-gray-500 md:mx-64 ">
          <FaInstagram className="S-icon-hover transition-all"/>
          <FaLinkedin className="S-icon-hover transition-all"/>
          <FaTwitter className="S-icon-hover transition-all"/>
          <FaTelegram className="S-icon-hover transition-all"/>
        </div>
        <h1 className="md:mx-64 md:text-xl flex items-center gap-2 text-gray-400 font-medium "><IoIosGlobe size={30}/> United State of America</h1>
        <div className="mt-5">
          <h1 className="md:mx-64 md:text-xl flex items-center gap-2 text-gray-400 font-medium "> About us</h1>
          <h1 className="md:mx-64 md:text-xl flex items-center gap-2 text-gray-400 font-medium "> Contact Us</h1>
          <h1 className="md:mx-64 md:text-xl flex items-center gap-2 text-gray-400 font-medium "> Copyright© 2024</h1>
        </div>
      </footer>
    </div>
  );
}
