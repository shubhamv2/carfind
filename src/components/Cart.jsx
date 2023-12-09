import { useCarContext } from "../context/carContext"
import CartItems from "./CartItems";
import PriceDetails from "./PriceDetails";

export default function Cart() {
    const {addedCartData } = useCarContext();
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold">Your Cart - Total Items({addedCartData.length})</h1>
            <div className="flex items-start">
                <CartItems/>
                <PriceDetails addedCartData={addedCartData}/>
            </div>
        </div>
    )
}