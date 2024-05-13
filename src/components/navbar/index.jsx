import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { FaGoogle } from "react-icons/fa";


export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

    console.log(searchParam);

    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
            <NavLink to={"/"}>Cattagram</NavLink>
        </h2>
        <input
            type="text"
            name="search"
            value={searchParam}
            disabled={true}
            onChange={(e) => { setSearchParam(e.target.value) }}
            placeholder="Search cat breeds"
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
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
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}
                <FaGoogle className="mx-1"/>
                <span className="px-1">Login</span>
            </button>
        </ul>
    </nav>
}