import React from 'react'
import { useParams } from 'react-router-dom'
import { useCarContext } from '../context/carContext';

function ProductPage() {
    const {carData} = useCarContext();
    const {productId} = useParams();
    const product = carData.find((item)=>item.id === parseInt(productId));
    return (
        <div>
            {
                <img src={product.image} alt="" />
            }
        </div>
    )
}

export default ProductPage