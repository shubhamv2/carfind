import { useCarContext } from "../context/carContext"
import CartItems from "./CartItems";
import PriceDetails from "./PriceDetails";

export default function Cart() {
    const { addedCartData } = useCarContext();
    return (
        <>
            {

                addedCartData.length > 0? <div className="w-full">
                    <h1 className="text-2xl font-semibold">Your Cart - Total Items({addedCartData.length})</h1>
                    <div className="flex items-start">
                        <CartItems />
                        <PriceDetails addedCartData={addedCartData} />
                    </div>
                </div>:<div className="flex justify-center text-2xl pt-10 text-gray-700">There are no items in the cart !</div>
            }
        </>
    )
}