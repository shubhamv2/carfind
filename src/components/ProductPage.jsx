import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCarContext } from '../context/carContext';
import Card from './Card';
function ProductPage() {

    const { carData, addToCart } = useCarContext();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const foundProduct = carData.find((item) => item.id === parseInt(productId));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [carData, productId]);

    // Check if product is not initialized yet
    if (!product || Object.keys(product).length === 0) {
        return <div>Loading...</div>; // You can render a loading state here
    }
    return (
        <div className='w-full'>
            <div className='flex shadow-lg'>
                <div className='w-1/2'>
                    {
                        <img src={product.image} alt="" className='w-full h-80 object-cover' />
                    }
                </div>
                <div className='px-5 w-1/2' >
                    <h1 className='text-xl font-semibold'>{product.title}</h1>
                    <p>Model: {product.start_production}</p>
                    <p>Type: {product.class}</p>
                    <p>Description:  Best low buget {product.title} car. Which was manifactured in {product.start_production}. and It is {product.class} type vehicle. want know more about vehicles please contact us</p>
                    <button className='bg-black text-white px-3 py-2 rounded-md mt-3' onClick={() => {
                        addToCart(product.id)
                    }}>Add to Cart</button>
                </div>

            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-5 mb-5'>Some other related vehicles</h1>
                <div className='gap-2 columns-4'>
                    {
                        carData.map((data)=>{
                            if(data.title != product.title && data.title.startsWith(product.title.slice(0, 5))){
                                return (<div key={data.id} className='rounded-lg shadow-md overflow-hidden px-2 py-2'><Card data={data} addToCart={addToCart}/></div>)
                            }
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage