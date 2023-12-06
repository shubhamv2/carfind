import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { NavLink, Link } from "react-router-dom"
import { useCarContext } from "../context/carContext"
export default function Navbar() {
    const { cartItems } = useCarContext();
    return (
        <header className="w-full h-16 shadow-md">
            <nav className="flex mx-auto items-center w-full max-w-7xl h-full px-5 justify-between">
                <div className="">
                    <Link to="/" className="font-bold text-2xl py-3">
                        Car<span className="">Find</span>
                    </Link>
                </div>
                <div className="text-lg flex">
                    <ul className="flex items-center justify-center">
                        <li><NavLink className="p-3" to="/">Home</NavLink></li>
                        <li><NavLink className="p-3" to="/">About</NavLink></li>
                        <li><NavLink className="p-3" to="/">Contact us</NavLink></li>
                        <li><NavLink className="p-3" to="/">Services</NavLink></li>
                    </ul>
                    <form className="flex ml-5">
                        <input placeholder="Search item here..." type="text" className="outline-none px-3 py-1   border rounded-l-md" />
                        <button className="text-white bg-black px-3 py-0.5 rounded-r-md"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
                <div className="relative cursor-pointer">
                    <Link to="/cart" className="">
                        <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                        <span className="text-xs bg-red-600 font-bold absolute text-center left-2 text-white w-4 h-4 rounded-full"><p className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">{cartItems}</p></span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}