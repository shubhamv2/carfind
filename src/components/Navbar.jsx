import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FaCar } from "react-icons/fa";
import { NavLink, Link} from "react-router-dom"
import { useCarContext } from "../context/carContext"
import { useEffect } from "react";
export default function Navbar() {
    const { cartItemsCount, searchItems, setSearchItemsFunc, isLogin,setLogin } = useCarContext();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }
    const clearInput = () =>{
        setSearchItemsFunc("");
    }
    useEffect(()=>{
        clearInput();
    },[location])
    return (
        <header className="w-full h-16 shadow-md fixed bg-white z-50">
            <nav className="flex mx-auto items-center w-full max-w-7xl h-full px-4 justify-between relative md:static">
                <div className="">
                    <Link to="/" className="py-3 flex items-center text-xl font-semibold">
                        <span className="text-3xl"><FaCar/></span >
                        Car<span className=" text-violet-900">Find.com</span>
                    </Link>
                </div>
                <div className="text-lg flex">
                    <ul className="md:flex items-center justify-center">
                        <li><NavLink className={({isActive})=>`p-3 text-gray-500 ${isActive?"text-black":""}`} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive})=>`p-3 text-gray-500 ${isActive?"text-black":""}`} to="/about">About</NavLink></li>
                        <li><NavLink className={({isActive})=>`p-3 text-gray-500 ${isActive?"text-black":""}`} to="/contact">Contact us</NavLink></li>
                    </ul>
                    <form className="flex md:ml-5" onSubmit={handleSearchSubmit}>
                        <input value={searchItems} onChange={(e)=>{
                            setSearchItemsFunc(e.target.value);
                        }} placeholder="Search item here..." type="text" className="outline-none px-3 py-1   border rounded-l-md text-md" />
                        <button type="submit" className="text-white bg-black px-3 py-0.5 rounded-r-md"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
                <div className="relative cursor-pointer flex items-center gap-2">
                       <Link to="/cart" className="">
                        <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                        <span className="text-xs bg-red-600 font-bold absolute text-center left-2 text-white w-4 h-4 rounded-full"><p className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">{cartItemsCount}</p></span>
                    </Link>
                    <Link to="/user/login" className="bg-black text-white px-2 py-1 rounded-md font-semibold">Login</Link>
                    
                </div>
            </nav>
        </header>
    )
}