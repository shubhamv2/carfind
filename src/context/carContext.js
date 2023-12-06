import { useContext,createContext } from "react";

export const carContext = createContext({
    carData:[],
    cartItems:0,
    addToCart:()=>{},
    removeFromCart:()=>{},
});


export const useCarContext = ()=>{
    return useContext(carContext);

} 
const CarContextProvider = carContext.Provider;
export default CarContextProvider;