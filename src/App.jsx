import { Navbar } from "./components";
import { useState, useEffect } from "react";
import CarContextProvider from './context/carContext';
import { Outlet} from "react-router-dom";

function App() {
    const [carData, setCarData] = useState([]);
    const [cartItems, setCartItems] = useState(0);
  
    function addToCart(id){
        setCartItems((prev)=>prev+1);
        setCarData((prevData)=>prevData.map((carInfo)=>carInfo.id === id?{...carInfo,inCart:true}:carInfo)); 
    }
    function removeFromCart(id){
        setCartItems((prev)=>prev-1);
        setCarData((prevData)=> prevData.map((carInfo)=>carInfo.id === id?{...carInfo, inCart: false}:carInfo));
        console.log("cart item removed",id);
    }
    
    useEffect(() => {
        const storedCars = localStorage.getItem('cars');
        if(storedCars){
            setCarData(JSON.parse(storedCars));
        }
        else{
            fetchData();
        }

        const cartItemsString = localStorage.getItem('cartItems');

        const cartParsedData = cartItemsString?JSON.parse(cartItemsString):undefined;

        if(cartParsedData !== undefined){
            setCartItems(parseInt(cartParsedData));
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            const result = await response.json();
            setCarData(result.data);
            localStorage.setItem('cars',JSON.stringify(result.data));
        }
        catch (error) {
            console.log("Error fetching data: ", error);
        }
    }



    useEffect(() => {
        // Use a callback function to ensure you get the latest state
        setCartItems((prev) => {
            localStorage.setItem('cartItems', JSON.stringify(prev));
            return prev;
        });
        setCarData((prev)=>{
            localStorage.setItem('cars',JSON.stringify(prev));
            return prev;
        })
    }, [cartItems,carData]);
    return (

        <CarContextProvider value={{carData,cartItems,addToCart,removeFromCart}}>
            <Navbar />
            <Outlet/>
        </CarContextProvider>

    )
}
export default App;