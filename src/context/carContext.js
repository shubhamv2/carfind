import { useContext,createContext } from "react";

export const carContext = createContext({
    carData:[],
    cartItemsCount:0,
    addedCartData:[],
    addToCart:()=>{},
    removeFromCart:()=>{},
    searchItems:"",
    setSearchItemsFunc: ()=>{},
    totalItemsCount:[],
    changeTotalItems:()=>{}
});


export const useCarContext = ()=>{
    return useContext(carContext);

} 
const CarContextProvider = carContext.Provider;
export default CarContextProvider;