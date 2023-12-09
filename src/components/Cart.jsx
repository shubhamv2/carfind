import { useEffect, useState } from "react";
import { useCarContext } from "../context/carContext"
import Cartcard from "./Cartcard";
export default function Cart() {
    const { removeFromCart, searchItems, addedCartData } = useCarContext();
    const [countPrice, setCountPrice] = useState(0);
    return (
        <div className="w-full border border-green-500">
            <h1 className="text-2xl font-semibold">Your Cart - Total Items({addedCartData.length})</h1>
            <div className="flex">
                <div className="w-3/4">
                    {
                        addedCartData.map((data) => {
                            if (searchItems) {
                                if (data.title.toLowerCase().startsWith(searchItems.toLocaleLowerCase())) {
                                    return (
                                        <div key={data.id} className="my-4 shadow-md">
                                            <Cartcard data={data} removeFromCart={removeFromCart} />
                                        </div>
                                    )
                                }
                            }
                            else {

                                return (
                                    <div key={data.id} className="my-4 shadow-md">
                                        <Cartcard data={data} removeFromCart={removeFromCart} />
                                    </div>
                                )
                            }

                        })
                    }
                </div>
                <div className="my-4 mx-1 w-1/4 shadow-lg px-4">
                    <h1 className="text-lg font-bold">Price Details</h1>
                    <div className="w-full">
                        {
                            addedCartData.map((item) => (<div className="w-full flex justify-between" key={item.id}>
                                <div className="flex justify-between py-2 w-3/4">
                                    <p className="">{item.title}</p>
                                    <p className="">{1}</p>
                                </div>
                                <p className="py-2">{item.price}</p>
                            </div>))
                        }

                        <div>
                            <p>Total</p>
                            {/* <p>{price}</p> */}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}