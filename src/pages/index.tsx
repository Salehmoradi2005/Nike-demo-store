import { useState } from "react";
import { Image, Snippet , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Pagination} from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa";
import src from '../../public/index-poster.jpg'
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import ProductCard from "@/components/ProductCard";
import I1 from '../../public/air-jordan-1-low-mens-shoes-0LXhbn.png'
import I2 from '../../public/air-jordan-1-mid-womens-shoes-FfLktz.png'
import I3 from '../../public/air-jordan-6-retro-white-black-mens-shoes-Wk71GJ.png'
import ScrollCont from "@/components/ScrollCont";
import I4 from '../../public/air-max-2017-mens-shoes-BVqnkV.png'


const AirProduct = [
  {
    img : I1,
    price : 149 , 
    Tag : 'Air Jordan 1 low',
    Ncolors : 6,
    Description :'Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in 89.' ,
    Categories: 'Men',

  },
  {
    img : I2,
    price : 189 , 
    Tag : 'Air Jordan 1 mid',
    Ncolors : 6,
    Description :'This iteration of the AJ1 reimagines Mikes first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.' ,
    Categories: 'All',

  },
  {
    img : I3,
    price : 99 , 
    Tag : 'Air Jordan 6 retro',
    Ncolors : 3,
    Description :'Make new moves in the Air Jordan 1 Low OG. Remade with the classic details, it combines a comfortable feel with the timeless style of one of cultures greatest sneaker creations.' ,
    Categories: 'All',

  },
  {
    img : I4,
    price : 200 , 
    Tag : 'Air Jordan max 2017',
    Ncolors : 2,
    Description : 'The Nike Air Max 2017 delivers the plush sensation you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your mid-foot and heel for secure comfort.',
    Categories: 'Sport',

  },
]

export default function IndexPage() {
  const [Data , setData] = useState({
    img : I1,
    price : 149 , 
    Tag : 'Air Jordan 1 low',
    Ncolors : 0 ,
    Description : "" ,
    Categories : ""
  })
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  function ModalHandel(IN) {
    setData(IN)
    onOpen()
  }
  return (
    <>
      <DefaultLayout>
        <h1 className="text-center text-2xl font-black mb-5">Series</h1>
        <div className="flex text-center justify-center gap-10 font-semibold flex-wrap mb-20 S-series">
          {siteConfig.ProductNames.map((item) => (
            <span className="transition ease-in-out delay-50 cursor-pointer hover:opacity-50 hover:scale-90">{item.name}</span>
          ))}
        </div>
        <section className="flex-col items-center justify-center gap-9 py-8 md:flex md:flex-row S-cont fadeInEffect">
          <Image isZoomed src={src} width={300} shadow='md'/>
          <div className="flex flex-col gap-6 container antialiased justify-items-center items-center	place-items-center	text-center	w-80 ">
            <h1 className="text-5xl font-black antialiased">JUST DO IT</h1>
            <p className="w-full sm:w-40 ">Everything you need for the biggest school day of the season.</p>
            <Snippet variant="shadow" hideCopyButton={true} hideSymbol={true} >Best qulaity</Snippet>
          </div>
        </section>
        <h1 className="text-2xl font-bold antialiased text-center mb-10 fadeInEffect">Best Air Sellers</h1>
        <section className="flex flex-wrap gap-5 items-center justify-center text-center sm:gap-10">
          {AirProduct.map((item) => (
            <ScrollCont>
              <ProductCard Img={item.img} Tag={item.Tag} Price={item.price} BUTT={() => {ModalHandel(item)}}/>
            </ScrollCont>
          ))}
        </section>

        <Modal
        radius="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {Data.Tag}
              </ModalHeader>
              <ModalBody >
                <div className="flex-col w-full gap-5 justify-center S-cont ">
                  <Image shadow='lg' src={Data.img} />
                  <div>
                    <h1 className="font-bold text-2xl mb-4">{Data.Tag}</h1>
                    <p className="opacity-80 text-sm ">{Data.Ncolors}</p>
                    <p className="opacity-80 text-sm mb-5">{Data.Categories}</p>
                    <Pagination total={5}   variant="flat" color="warning"/>
                    <p className="text-slate-500 mt-5">{Data.Description}</p>
                    <br />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <h2 className="flex justify-center font-bold text-center w-1/3 items-center m-auto ">{Data.price}$</h2>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="default" variant="ghost" onPress={onClose}>
                  <FaCartPlus /> Purchase
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </DefaultLayout>
    </>
  );
}
