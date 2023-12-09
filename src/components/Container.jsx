import { useCarContext } from "../context/carContext";
import Card from "./Card";
export default function Container() {
    const { carData, addToCart, searchItems } = useCarContext();
    return (

        <div className="grid grid-cols-3 gap-x-3 gap-y-4 mx-auto">
            {
                carData.map((data) => {
                    if (!data.inCart) {
                        if (searchItems) {
                            if (data.title.toLowerCase().startsWith(searchItems.toLowerCase())) {
                                return (<div key={data.id} className="shadow-lg p-3 rounded-lg">
                                    <Card data={data} addToCart={addToCart} />
                                </div>)

                            }
                        }
                        else {
                            return (<div key={data.id} className="shadow-lg p-3 rounded-lg">
                                <Card data={data} addToCart={addToCart} />
                            </div>)
                        }

                    }

                }
                )
            }
        </div>

    )

}