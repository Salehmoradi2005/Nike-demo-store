import { BiSolidStar } from "react-icons/bi"

export default function Product({img , name , price , action , rating}) {
    return(
        <div className='S-product-cont shadow-md' onClick={action}>
            <img src={img} alt="" width={300} />
            <div className='relative'>
                <h2 className='pl-2  text-xl font-bold text-gray-500'>{name}</h2>
                <h2 className='pl-2 text-md  font-bold text-gray-400'>{price}$</h2>
                <h2 className="flex items-center gap-1 pl-2 text-md  font-bold text-gray-400"><BiSolidStar  color="#f5a524" />{rating}</h2>
                <div className='S-button'>
                    <p className='font-semibold text-gray-400'> View </p>
                </div>
            </div>
        </div>
    )
}