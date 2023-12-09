import React from 'react'
import Cartcard from "./Cartcard";
import { useCarContext } from '../context/carContext';
function CartItems() {
    const {addedCartData, searchItems} = useCarContext();
    return (
        <div className="w-3/4">
            {
                addedCartData.map((data) => {
                    if (searchItems) {
                        if (data.title.toLowerCase().startsWith(searchItems.toLocaleLowerCase())) {
                            return (
                                <div key={data.id} className="my-4 shadow-md">
                                    <Cartcard data={data} />
                                </div>
                            )
                        }
                    }
                    else {

                        return (
                            <div key={data.id} className="my-4 shadow-md">
                                <Cartcard data={data} />
                            </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default CartItems