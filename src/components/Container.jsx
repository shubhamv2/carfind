import { useCarContext } from "../context/carContext";
import Card from "./Card";
export default function Container() {
    const { carData, addToCart, searchItems } = useCarContext();
    return (
        <div className="mx-auto">
            <h1 className="text-3xl font-semibold ml-3 my-1">Find your dream car here with low budget !</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4">
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
        </div>

    )

}