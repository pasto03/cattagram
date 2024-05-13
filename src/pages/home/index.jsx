import { useContext } from "react"
import { GlobalContext } from "../../context"
import CatItem from "../../components/cat-item";

export default function Home() {
    const { loading, recipeList } = useContext(GlobalContext);

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 w-3/4 max-w-screen-sm">
        {
            recipeList && recipeList.length > 0
                ? recipeList.map((item) => <CatItem item={item} />)
                : <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to search. Please search something
                    </p>
                </div>
        }
    </div>
}