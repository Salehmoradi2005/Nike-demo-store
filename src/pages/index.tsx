import { Image, Snippet } from "@nextui-org/react";
import src from '../../public/index-poster.jpg'
import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <h1 className="text-center text-2xl font-black mb-5">Series</h1>
      <div className="flex text-center justify-center gap-10 font-semibold flex-wrap mb-20 S-series">
        {siteConfig.ProductNames.map((item) => (
          <span className="transition ease-in-out delay-50 cursor-pointer hover:opacity-50 hover:scale-90">{item.name}</span>
        ))}
      </div>
      <section className="flex-col items-center justify-center gap-9 py-8 md:flex md:flex-row S-cont">
        <Image isZoomed src={src} width={300} shadow='md'/>
        <div className="flex flex-col gap-6 container antialiased justify-items-center items-center	place-items-center	text-center	w-80 ">
          <h1 className="text-5xl font-black antialiased">JUST DO IT</h1>
          <p className="w-40">Everything you need for the biggest school day of the season.</p>
          <Snippet variant="shadow" hideCopyButton={true} hideSymbol={true} >Best qulaity</Snippet>
        </div>
      </section>
      <section className="items-center justify-center text-center">
        
      </section>
    </DefaultLayout>
  );
}
