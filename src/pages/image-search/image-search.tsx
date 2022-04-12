import { FC, useState } from "react";
import "./image-search.css";
import { Button, Paper, TextField } from "@mui/material";

type Props = {
    handleSearchImages: (searchValue: string) => void,
};

/**
 * This is container for search component. It will have search text box and search.
 * This will return search value to image container.
 */
const ImageSearch: FC<Props> = ({handleSearchImages}) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
        <Paper className="search">
            <TextField 
                label="Search Image"
                variant="standard"
                className="search-text-field"
                value={searchValue} 
                onChange={handleChange}/>
            <Button 
                variant="outlined" 
                className="btn" 
                onClick={() => handleSearchImages(searchValue)}> 
                Search 
            </Button>
        </Paper>
        </>    
    )
}
export default ImageSearch;