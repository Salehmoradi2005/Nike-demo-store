import {TableRow, TableCell } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

import { IoShieldCheckmark } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

export default function CTableRow() {
    return(
        <TableRow >
            <TableCell>
                <div className="flex gap-5">
                    <img src={siteConfig.Products[5].Img} alt="" width={100} className="rounded-lg shadow-lg"/>
                    <div className="mt-2">
                        <h1 className="font-semibold">{siteConfig.Products[5].Tag}</h1>
                        <p className="flex items-center text-xs gap-1 text-gray-400 mt-2"><IoShieldCheckmark/>6 Months Warranty</p> 
                        <p className="flex items-center text-xs gap-1 text-gray-400"><MdLocalGroceryStore/>Main Nike Store</p>
                        <p className="flex items-center text-xs gap-1 text-gray-400"><FaTruck/>7 Days Delivery</p>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <p className="font-semibold">195 $</p>
            </TableCell>
            <TableCell>
                <div className="flex gap-2">
                    <p className="bg-slate-200 w-4 h-4 flex justify-center items-center rounded pb-1 shadow-md">-</p>
                    <p > 1</p>
                    <p className="bg-slate-200 w-4 h-4 flex justify-center items-center rounded pb-1 shadow-md">+</p>
                </div>
             </TableCell>
             <TableCell><p className="font-semibold">195 $</p></TableCell>
            </TableRow>
    )
}