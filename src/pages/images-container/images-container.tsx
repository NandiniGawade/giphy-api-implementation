import { Paper } from "@mui/material";
import { FC, useState } from "react";
import ImageSearch from "../image-search/image-search";
import GiphyImages from "../images-giphy-react-component/giphy-images";
import { Images } from "./images";

const ImagesContainer: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchImages = (searchValue: string) => {
        setSearchValue("");
        setSearchValue(searchValue);
        // return (
        //     <Paper>
        //             <GiphyImages searchValue={searchValue}/>
        //     </Paper>
        // );
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