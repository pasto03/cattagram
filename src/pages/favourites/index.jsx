import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/cat-item";

export default function Favourites() {
    const { favouritesList } = useContext(GlobalContext);
    return <div className="w-1/2 py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favouritesList && favouritesList.length > 0
                ? favouritesList.map((item) => <RecipeItem item={item} />)
                : <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing here
                        </p>
                </div>
        }
    </div>
}