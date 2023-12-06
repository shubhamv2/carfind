import { useCarContext } from "../context/carContext"
import Cartcard from "./Cartcard";
export default function Cart(){
    const {carData,removeFromCart} = useCarContext();
    return(
        <div className="">
            {
                carData.map((data)=>{
                    if(data.inCart){
                        return(
                            <div key={data.id} className="my-4 shadow-md mx-4">
                                <Cartcard data={data} removeFromCart={removeFromCart}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}