import React, { useEffect, useState } from 'react'
import { useCarContext } from '../context/carContext';

function PriceDetails() {
    const { totalItemsCount, addedCartData } = useCarContext();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        function calculatePrice() {
            let total = 0;
            for (let i = 0; i < addedCartData.length; i++) {
                for (let j = 0; j < totalItemsCount.length; j++) {
                    if (addedCartData[i].id === totalItemsCount[j].id) {
                        total += addedCartData[i].price * totalItemsCount[j].count;
                    }
                }
            }
            console.log(total);
            return total;

        }
        setTotalPrice(calculatePrice());
    }, [totalItemsCount, addedCartData])

    return (
        <div className="my-4 mx-1 w-1/4 shadow-lg px-4 pb-5 min-h-screen">
            <h1 className="text-lg font-bold">Price Details</h1>
            <div className="w-full">
                {
                    addedCartData.map((item) => (<div className="w-full flex justify-between" key={item.id}>
                        <div className="flex justify-between py-2 w-3/4">
                            <p className="">{item.title}</p>
                            <p className="">{totalItemsCount.find((itemFind) => itemFind.id === item.id)?.count || 1}</p>
                        </div>
                        <p className="py-2">{item.price}</p>
                    </div>))
                }

                <div className='font-bold flex pt-5 border-t-2 justify-between mt-2'>
                    <p>Total</p>
                    <p>{totalPrice}</p>
                </div>


            </div>
            <div className='w-full mt-10'>{

                addedCartData.length && <button className='rounded-lg hover:bg-green-600 shadow-sm py-3 w-full font-bold bg-green-500 text-white'>Place Order</button>
            }
            </div>
        </div>
    )
}

export default PriceDetails