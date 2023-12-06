import { useContext,createContext } from "react";

export const carContext = createContext({
    carData:[],
    cartItems:0,
    addToCart:()=>{},
    removeFromCart:()=>{},
    searchItems:"",
    setItems: ()=>{},
});


export const useCarContext = ()=>{
    return useContext(carContext);

} 
const CarContextProvider = carContext.Provider;
export default CarContextProvider;