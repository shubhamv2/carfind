import { Link } from 'react-router-dom';
export default function Card({ data, addToCart}) {
    return (
        <div className="">
            <Link to="/">
                <div>
                    <div className="">
                        <img alt="" src={data.image} className="w-full h-60 object-cover" />
                    </div>
                    <h1 className='text-xl font-semibold'>{data.title}</h1>
                    <p className='font-normal'>Model <span className='font-light'>{data.start_production ? data.start_production : "Not mentioned"}</span></p>
                    <p className='font-normal'>Type <span className='font-light'>{data.class}</span></p>
                    <p className='font-normal'>INR <span className='font-light'>{data.price}</span></p>
                </div>
            </Link>
            <div className='mt-2'>
                <button onClick={()=>{addToCart(data.id)}} className="text-white font-semibold p-2 bg-black rounded-sm" disabled={data.inCart}>{!data.inCart ? "Add to cart" : "In cart"}</button>
            </div>
        </div>
    )
}