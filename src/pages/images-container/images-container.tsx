import { Paper } from "@mui/material";
import { FC, useState } from "react";
import ImageSearch from "../image-search/image-search";
import GiphyImages from "../images-giphy-react-component/giphy-images";
import { Images } from "./images";

/**
 * This image container will display images from treading or search images API.
 * Based on search value it will decide which images should load 
 * either from treaing images or searched value images.
 */

const ImagesContainer: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchImages = (searchValue: string) => {
        setSearchValue(searchValue);
    }
    return (
        <>
            { <ImageSearch handleSearchImages={handleSearchImages}/>}
            {   searchValue === "" &&
                <Paper>
                    <Images/>
                </Paper>
            }
            {   searchValue !== "" &&
                <Paper>
                    <GiphyImages searchValue={searchValue}/>
                </Paper>
            }
        </>
    )
}

export default ImagesContainer;