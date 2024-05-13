import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [catList, setCatList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            // const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/cats?n=10`);

            const data = await res.json();
            if (data) {
                setCatList(data);
                setSearchParam("");
                navigate("/");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setSearchParam("");
            console.log(error);
        }
    }

    async function fetchCats() {
        try {
            setLoading(true);
            // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            // const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/cats?n=10`);

            const data = await res.json();
            if (data) {
                setCatList(data.cats);
                setSearchParam("");
                navigate("/");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setSearchParam("");
            console.log(error);
        }
    }

    useEffect(() => {
        if (!(catList && catList.length > 0)) {
            fetchCats();
        }
    }, [])

    console.log(catList);

    function handleAddToFavourites(getCurrentItem) {
        console.log(getCurrentItem);
        let cpyFavouritesList = [...favouritesList];
        const index = cpyFavouritesList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            cpyFavouritesList.push(getCurrentItem);
        } else {
            cpyFavouritesList.splice(index);
        }

        setFavouritesList(cpyFavouritesList);
    }

    console.log(favouritesList, "favourites list");

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList: catList,
                setSearchParam,
                handleSubmit,
                recipeDetailsData,
                setRecipeDetailsData,
                handleAddToFavourites,
                favouritesList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
