import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import {RadioGroup, Radio} from "@nextui-org/react";
import { useTheme as useNectTheme }  from "next-themes";
import { useTheme as useNextUITheme } from '@nextui-org/react';


import DefaultLayout from "@/layouts/default";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { BiCart } from "react-icons/bi";



export default function Cart() {
        let Total:number = 0;
        let Products = []
        let Products_mobile = []
        let numbers = []
        for (let index = 0; index < 4; index++) {
            numbers.push(Math.floor(Math.random() * siteConfig.Products.length))
            let Object = siteConfig.Products[numbers[index]]
            Total = Total + Object.Price
            Products.push(
                CTableRow(Object.Img , Object.Tag , Object.Price , index)
            )
            Products_mobile.push(
                CTableRow_mobile(Object.Img , Object.Tag , Object.Price , index)
            )
        }
        function CTableRow_mobile(img:string , tag:string , price:number , key:number) {
            return(
                <TableRow key={key}>
                    <TableCell>
                        <div className="flex gap-5">
                            <img src={img} alt="" width={100} className="rounded-lg shadow-lg"/>
                            <div className="mt-2">
                                <h1 className="font-semibold">{tag}</h1>
                                <p className="flex items-center text-xs gap-1 text-gray-400 mt-2"><IoShieldCheckmark/>6 Months Warranty</p> 
                                <p className="flex items-center text-xs gap-1 text-gray-400"><MdLocalGroceryStore/>Main Nike Store</p>
                                <p className="flex items-center text-xs gap-1 text-gray-400"><FaTruck/>7 Days Delivery</p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <p className="font-semibold">{price} $</p>
                    </TableCell>
                    </TableRow>
            )}

        function CTableRow(img:string , tag:string , price:number , key:number) {
        return(
            <TableRow key={key}>
                <TableCell>
                    <div className="flex gap-5">
                        <img src={img} alt="" width={100} className="rounded-lg shadow-lg"/>
                        <div className="mt-2">
                            <h1 className="font-semibold">{tag}</h1>
                            <p className="flex items-center text-xs gap-1 text-gray-400 mt-2"><IoShieldCheckmark/>6 Months Warranty</p> 
                            <p className="flex items-center text-xs gap-1 text-gray-400"><MdLocalGroceryStore/>Main Nike Store</p>
                            <p className="flex items-center text-xs gap-1 text-gray-400"><FaTruck/>7 Days Delivery</p>
                        </div>
                    </div>
                </TableCell>
                <TableCell>
                    <p className="font-semibold">{price} $</p>
                </TableCell>
                <TableCell>
                    <div className="flex gap-2">
                        <p className="bg-slate-200 w-4 h-4 flex justify-center items-center rounded pb-1 shadow-md">-</p>
                        <p > 1</p>
                        <p className="bg-slate-200 w-4 h-4 flex justify-center items-center rounded pb-1 shadow-md">+</p>
                    </div>
                 </TableCell>
                 <TableCell><p className="font-semibold">{price}</p></TableCell>
                </TableRow>
        )}
    return(
        <DefaultLayout>
            <div className="text-center">
                <h1 className="text-2xl font-bold">My Cart</h1>
                <div className="mt-5">
                    <Table removeWrapper aria-label="Example static collection table" className="hidden sm:block">
                    <TableHeader>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Price</TableColumn>
                        <TableColumn >QNT</TableColumn>
                        <TableColumn>Total</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {Products}
                    </TableBody>
                    </Table>

                    <Table removeWrapper aria-label="Example static collection table" className="block sm:hidden">
                    <TableHeader>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Price</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {Products_mobile}
                    </TableBody>
                    </Table>
                </div>


                <div className="flex flex-col sm:flex-row justify-between w-full m-auto rounded-lg shadow-lg h-auto  mt-5 p-12 items-center  ">
                    <div>
                    <RadioGroup
                        label="Select your delivery type"
                        >
                        <Radio  value="buenos-aires">International Delivery</Radio>
                        <Radio value="sydney">USA Delivery</Radio>
                        <Radio value="san-francisco">Europe Delivery</Radio>
                        </RadioGroup>
                    </div>
                    <hr></hr>
                    <div className="sm:mt-0 mt-20">
                        <div className="flex gap-5 justify-center">
                            <p>Total</p>
                            <p className="text-gray-300">-----------</p>
                            <p>{Math.floor(Total)} $</p>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <p>Discount</p>
                            <p className="text-gray-300">-----------</p>
                            <p>-32 $</p>
                        </div>
                        <div className="flex gap-5 justify-center font-bold">
                            <p>Final</p>
                            <p className="text-gray-300">-----------</p>
                            <p>{Math.floor(Total) - 32} $</p>
                        </div>
                        <Button color="warning" className="mt-10"><BiCart />Complete Purchase</Button>
                    </div>
                </div>
                
            </div>
        </DefaultLayout>
    )
}