import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useCarContext } from "../context/carContext";
export default function Cartcard({ data}) {
    const {removeFromCart, changeTotalItems, totalItemsCount} = useCarContext();
    return (
        <div className="flex rounded-lg overflow-hidden w-full h-64">
            <div className=" w-2/3">
                <img src={data.image} alt="" className=" object-cover w-full h-full" />
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
                        <button onClick={()=>{
                            changeTotalItems(false,data.id);
                        }} className="py-1 bg-red-500 text-white text-xl px-2 border">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className="text-xl">
                            {totalItemsCount.find((item)=>item.id === data.id)?.count || 1}
                        </p>
                        <button onClick={()=>{changeTotalItems(true,data.id)}} className="py-1 px-2 text-xl bg-green-500 text-white">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>

                    </div>
                    <button className="border-black shadow-sm border rounded-sm py-2 bg-black text-white px-2 font-semibold" onClick={()=>{removeFromCart(data.id)}}>Remove Item</button>
                </div>
            </div>
        </div>
    )
}