import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Cartcard({ data, removeFromCart }) {
    const [updateIncDec, setUpdateIncDec] = useState(1);
    const handleIncrement = () => {
        setUpdateIncDec((prev) => prev + 1);
    }
    const handleDecrement = () => {
        setUpdateIncDec((prev) => prev - 1);
    }
    return (
        <div className="flex rounded-lg overflow-hidden w-full">
            <div className="w-1/2 h-72">
                <img src={data.image} alt="" className="w-full object-cover h-full" />
            </div>
            <div className="px-4">
                <div className="">
                    <h1 className="text-lg font-bold">{data.title}</h1>
                    <p>Model <span>{data.start_production}</span></p>
                    <p>Type <span>{data.class}</span></p>
                    <p>INR <span>{data.price}</span></p>
                </div>
                <div className="my-4">
                    <div className="flex border justify-between items-center w-28 mb-3">
                        <button onClick={handleDecrement} className="py-1 bg-red-500 text-white text-xl px-2 border" disabled={!updateIncDec}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className="text-xl">
                            {updateIncDec}
                        </p>
                        <button onClick={handleIncrement} className="py-1 px-2 text-xl bg-green-500 text-white">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>

                    </div>
                    <button className="border-black shadow-sm border rounded-sm py-2 bg-black text-white px-2 font-semibold" onClick={()=>{removeFromCart(data.id)}} disabled={!data.inCart}>Remove Item</button>
                </div>
            </div>
        </div>
    )
}