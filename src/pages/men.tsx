 import DefaultLayout from "@/layouts/default";
import React, { useState } from 'react';
import { DollarCircleFilled ,StarFilled, } from '@ant-design/icons';
import { Image , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import Product from "@/components/Product";
import Colors from "@/components/Colors";
import { FaCartPlus } from "react-icons/fa";
import { message } from "antd";
import ScrollCont from "@/components/ScrollCont";
import { siteConfig, SiteConfig } from "@/config/site";
import ProductCard from "@/components/ProductCard";

export default function Men() {
  const PopProduct = siteConfig.Products.filter((item) => item.Rating > 3.8)

  const [Products , SetProducts] = useState(siteConfig.Products.filter((i) => i.Category == 'Men'))
  const [ProductHandler , SetProductHandler] = useState(Products)

  const key = 'updatable';
  const [messageAPI , contextHolder] = message.useMessage();
  const info = () => {
    messageAPI.open({
      key,
      type: 'loading' ,
      content : "Loading",
      className: "h-50 scale-120"
    })
    setTimeout(() => {
      messageAPI.open({
        key,
        type: 'success',
        content: 'Added to cart',
        duration: 2,
        className: "h-50 scale-120"
      });
    }, 1000);
  }

  let Sizes = [];
  for (let index = 8; index <= 12; index++) {
    Sizes.push(
      <label>
        <input type="radio" name="Size" defaultChecked={index == 8 ? true : false} value={index} hidden id="Label"/>
        <div className="rounded-md shadow-md flex items-center justify-center font-semibold S-Item ">{index}</div>
      </label>
    )
  }


  const [Data , setData] = React.useState({
    Tag : 'Nike Air Force 1 07 LV8',
    Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fdb1da5d-df41-415c-840a-84d28f66a11e/AIR+FORCE+1+%2707+LV8.png' ,
    Price : 125,
    Description: "Comfortable, durable and timeless—it’s number 1 for a reason. The AF1's classic ‘80s construction pairs with neutral colors and layered textures for a utilitarian look.",
    Category: 'Men',
    Rating: 4.8,
    Key: 1
  })
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  function ModalHandel(IN:any) {
    setData(IN)
    onOpen()
  }
  return (
    <DefaultLayout >
      {contextHolder}
      <h1 className="text-center text-2xl font-bold mb-2">Best Seller</h1>
      <ScrollShadow orientation="horizontal" className="flex gap-5 w-auto S-M-off"  >
      {PopProduct.map((item) => (
            <ScrollCont >
              <ProductCard shadow='none' Img={item.Img} Tag={item.Tag} Price={item.Price} BUTT={() => {ModalHandel(item)}}/>
            </ScrollCont>
          ))}
      </ScrollShadow>
      <h1 className="text-center text-2xl font-bold mt-10 mb-5">Men shoes</h1>
      <div className="flex-row  sm:flex w-full sm:gap-2 relative h-auto justify-center">



        <div className="w-0 flex">

          <div className=" flex gap-2 sm:hidden S-temp2 mb-5" >
            <div className="text-lg font-semibold text-gray-600">
              Filter: 
            </div>
           <div className="flex gap-2 overflow-scroll S-temp-3">
            <label>
                <input  type="radio" hidden id="chip" name="filter"  value="1"/>
                <div className="S-chip"><DollarCircleFilled /> Price-L</div>
              </label>
              <label>
                <input  type="radio" hidden id="chip" name="filter" value="2"/>
                <div className="S-chip"><DollarCircleFilled /> Price-H</div>
              </label>
              <label>
                <input type="radio" hidden id="chip" name="filter" value="3"/>
                <div className="S-chip"><StarFilled /> Rating</div>
              </label>

           </div>
          </div>
        </div>




        <div className="w-full h-max flex flex-wrap justify-center sm:justify-left gap-2 sm:mt-5">

            {Products.map((item) => (
              <ScrollCont>
                <Product img={item.Img} name={item.Tag} price={item.Price} action={() => {ModalHandel(item)}} key={item.Key} rating={item.Rating}/>
              </ScrollCont>
            ))}
        </div>
      </div>


      <Modal
        size="sm"
        radius="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                {Data.Tag}
              </ModalHeader>
              <ModalBody >
                <div className="flex-col w-full gap-5 justify-center S-cont ">
                  <Image shadow='sm' src={Data.Img} />
                  <div>
                    <h1 className="font-bold text-2xl mb-4">{Data.Tag}</h1>
                    <p className="opacity-80 text-sm mb-5">{Data.Category}</p>
                    <div className="flex gap-2 mb-5">
                      <p className="font-bold mt-2 opacity-50">Size : </p>
                      {Sizes}
                    </div>

                    <div className="flex gap-2">
                      <p className="font-bold mt-2 opacity-50">Color : </p>
                      <Colors count={3}/>
                    </div>

                    <p className="text-slate-500 mt-5">{Data.Description}</p>
                    <br />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={() => {
                  onClose() 
                  info()
                }}>
                  <FaCartPlus size={20}/> Add to cart
                </Button>
                <Button color="default" variant="flat" onPress={onClose}>
                  Close
                </Button>

                <h2 className="flex justify-center font-bold text-center w-1/3 items-center m-auto  rounded-lg p-2">{Data.Price}$</h2>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
