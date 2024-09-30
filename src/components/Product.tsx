import { BiSolidStar } from "react-icons/bi"

export default function Product({img , name , price , action , rating}:any) {
    return(
        <div className='S-product-cont shadow-md S-demo-cont overflow-hidden' onClick={action}>
            <img src={img} alt="Connection Error" width={300} height={300}/>
            <div className='relative'>
                <h2 className='pl-2  text-md font-bold text-gray-500 w-max overflow-hidden sm:text-xl'>{name}</h2>
                <h2 className='pl-2 text-lg mt-2  font-bold text-gray-400'>{price}$</h2>
                <h2 className="flex items-center gap-1 pl-2 text-sm  font-bold text-gray-400"><BiSolidStar  color="#f5a524" />{rating}</h2>
            </div>
            <div className='S-button'>
                    <p className='font-semibold text-gray-400'> View </p>
            </div>
        </div>
    )
}