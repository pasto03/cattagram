import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";


export default function LikeButton({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    const { handleAddToFavourites, favouritesList } = useContext(GlobalContext);
    const iconSize = "36";
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (<div>
        {(isHovered || (favouritesList.findIndex(
                        favItem => favItem.id === item.id) !== -1)) ? (
            <HiHeart
                cursor={"pointer"}
                size={iconSize}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => { console.log("Liked"); handleAddToFavourites(item) }}
                color="red"
            />
        ) : (
            <HiOutlineHeart
                cursor={"pointer"}
                size={iconSize}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        )}
    </div>)
};