import IMG from "../../public/nike.ico";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className={`container mx-auto max-w-7xl px-6 flex-grow pt-16 `}>
        {children}
      </main>
      <footer className="w-full flex flex-col  justify-left px-16 py-3 S-footer  sm:px-40 sm:justify-center S-shadow">
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
      </footer>
    </div>
  );
}
