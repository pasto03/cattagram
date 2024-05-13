import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { FaGoogle } from "react-icons/fa";


export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

    console.log(searchParam);

    return <nav className="flex justify-between items-center py-6 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
            <NavLink to={"/"}>Cattagram</NavLink>
        </h2>
            <input
                type="text"
                name="search"
                value={searchParam}

                onChange={(e) => { setSearchParam(e.target.value) }}
                placeholder="Search cat breeds"
                className="bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg w-96 shadow-red-100 focus:shadow-red-200"
            />

        <ul className="flex gap-5">
            <li className="flex items-center">
                <NavLink
                    to={"/"}
                    className="text-black hover:text-gray-700 duration-300"
                >
                    Home
                </NavLink>
            </li>
            <li className="flex items-center">
                <NavLink
                    to={"/favourites"}
                    className="text-black hover:text-gray-700 duration-300"
                >
                    Favourites
                </NavLink>
            </li>
            <button className="bg-cat-pink hover:bg-cat-paw text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <FaGoogle className="text-white mr-1" />
                <span className="px-1">Login</span>
            </button>
        </ul>
    </nav>
}