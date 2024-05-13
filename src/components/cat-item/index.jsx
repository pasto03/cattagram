import LikeButton from "../like-button";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function CatItem({ item }) {
    const { handleAddToFavourites } = useContext(GlobalContext);
    return <div className="w-full h-full flex flex-col overflow-hidden p-5 bg-white/50 shadow-xl gap-5 border-2 rounded-2xl border-white">
        <div className="flex justify-center overflow-hidden items-center rounded-xl group">
            <img src={item?.url} alt="recipe item" className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                onDoubleClick={() => { console.log("Liked"); handleAddToFavourites(item) }} />
        </div>
        <div>
            <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
            {/* <HiOutlineHeart size={"32"} /> */}
            <LikeButton item={item} />
        </div>
    </div>
}