import IMG from '../../public/air-jordan-1-mid-womens-shoes-FfLktz.png'

export default function Product() {
    return(
        <div>
            <img src={IMG} alt="" width={300} />
            <h2 className='pl-2'>Air Jordan Mid 1</h2>
            <h2 className='pl-2'>116$</h2>
        </div>
    )
}