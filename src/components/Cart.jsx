import { useCarContext } from "../context/carContext"
import Cartcard from "./Cartcard";
export default function Cart() {
    const { carData, removeFromCart, searchItems } = useCarContext();
    return (
        <div className="">
            {
                carData.map((data) => {
                    if (data.inCart) {
                        if (searchItems) {
                            if (data.title.toLowerCase().startsWith(searchItems.toLocaleLowerCase())) {
                                return (
                                    <div key={data.id} className="my-4 shadow-md mx-4">
                                        <Cartcard data={data} removeFromCart={removeFromCart} />
                                    </div>
                                )
                            }
                        }
                        else {

                            return (
                                <div key={data.id} className="my-4 shadow-md mx-4">
                                    <Cartcard data={data} removeFromCart={removeFromCart} />
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}