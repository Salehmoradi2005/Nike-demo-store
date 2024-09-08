 import DefaultLayout from "@/layouts/default";
import React, { useState } from 'react';
import { ArrowUpOutlined,CiCircleFilled, DollarCircleFilled ,StarFilled, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Image , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Menu } from 'antd';
import {ScrollShadow} from "@nextui-org/react";
import IMG from '../../public/air-jordan-1-mid-womens-shoes-FfLktz.png'
import Product from "@/components/Product";
import { BsSkipStartFill } from "react-icons/bs";
import Colors from "@/components/Colors";
import { FaCartPlus } from "react-icons/fa";
type MenuItem = Required<MenuProps>['items'][number];
import { message } from "antd";
import ScrollCont from "@/components/ScrollCont";
import { siteConfig, SiteConfig } from "@/config/site";
import ProductCard from "@/components/ProductCard";





const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'size',
    icon: <ArrowUpOutlined />,
    children: [
          { key: '1', label: '8' },
          { key: '2', label: '9' },
          { key: '3', label: '10' },
          { key: '4', label: '11' },
          { key: '5', label: '12' },
          ,
    ],
  },
  {
    key: 'sub2',
    label: 'Color',
    icon: <CiCircleFilled />,
    children: [
      { key: '5', label: 'Option 5' ,className: "text-yellow-500"},
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];

export default function DocsPage() {
  const PopProduct = siteConfig.Products.filter((item) => item.Rating > 4.2)

  const [Products , SetProducts] = useState(siteConfig.Products)
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
      <h1 className="text-center text-2xl font-bold mb-2">Most Seller</h1>
      <ScrollShadow orientation="horizontal" className="flex gap-5" >
      {PopProduct.map((item) => (
            <ScrollCont >
              <ProductCard shadow='none' Img={item.Img} Tag={item.Tag} Price={item.Price} BUTT={() => {ModalHandel(item)}}/>
            </ScrollCont>
          ))}
      </ScrollShadow>
      <h1 className="text-center text-2xl font-bold mt-10 mb-5">Men shoes</h1>
      <div className="flex-row  sm:flex w-full sm:gap-2 relative h-auto justify-center">



        <div className="w-1/4 flex">
          <div className="w-full h-max flex justify-center mt-5 sm:sticky" style={{position:'-webkit-sticky' , top : 80
        }}>
            <Menu
            className="md:block hidden"
            defaultOpenKeys={['sub1' , 'sub2' ,'sub4']}
              style={{ width: 512 }}
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
            />
          </div>

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
