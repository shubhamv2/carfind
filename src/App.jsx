import { Navbar } from "./components";
import { useState, useEffect } from "react";
import CarContextProvider from './context/carContext';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    const [carData, setCarData] = useState([]);
    const [searchItems, setSearchItems] = useState("");
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [addedCartData, setAddedCartData] = useState([]);
    const addToCart = (id) => {
        setCartItemsCount((prev) => prev + 1);
        setAddedCartData((prevData) => {
            return Array.isArray(prevData) ? [
                ...prevData, ...carData.filter((item) => item.id === id)
            ] : [...carData.filter((item) => item.id === id)]
        });

        setCarData((prev) => prev.filter((item) => item.id != id));

    }
    const removeFromCart = (id) => {
        setCartItemsCount((prev) => prev - 1);
        setCarData((prev) => [...addedCartData.filter((item) => item.id === id), ...prev]);
        setAddedCartData((prevData) => prevData.filter((item) => item.id !== id));

    }


    const setSearchItemsFunc = (searchQuery) => {
        setSearchItems(searchQuery);
    }
    useEffect(() => {
        const getDataFromLocal = localStorage.getItem('carfinddata');
        const parsedData = JSON.parse(getDataFromLocal)
        if (parsedData) {
            setCarData(parsedData.cardata);
            setCartItemsCount(parsedData.itemscount);
            setAddedCartData(parsedData.addedcartdata);
            setCartItemsCount(parsedData.addedcartdata.length);
        }
        else {
            async function fetchData() {
                try {
                    const res = await fetch('/data.json');
                    const result = await res.json();
                    setCarData(result.data);
                    localStorage.setItem('carfinddata', JSON.stringify({ cardata: result.data, itemscount: 0, addedcartdata: [] }));
                }
                catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        }
    }, [])
    useEffect(() => {
        setAddedCartData((prevData) => {
            localStorage.setItem('carfinddata', JSON.stringify({
                cardata: [...carData],
                addedcartdata: [...prevData],
                itemscount: prevData.length,
            }));
            return prevData;
        });
    }, [addedCartData, cartItemsCount]);
    return (
        <CarContextProvider value={{ carData, cartItemsCount, addedCartData, addToCart, removeFromCart, searchItems, setSearchItemsFunc }}>
            <Navbar />
            <div className="w-full h-full min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </CarContextProvider>

    )
}
export default App;