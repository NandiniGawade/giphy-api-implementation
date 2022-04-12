import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import { FC, useEffect, useState } from "react";
import ResizeObserver from "react-resize-observer";
import { CenteredCircularProgress } from "../loader/centered-circular-progress";


type Props = {
    searchValue: string
}

const gf = new GiphyFetch("tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ");

/**
 * This component will showed all the images related to searched value.
 * Here implemented Giphy react-component to display the data.
 * It will fetch the records from server on scroll event.
 */

const GiphyImages: FC<Props> = ({searchValue}) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [displayGif, setDisplayGif] = useState(true)
    const [value, setValue] = useState("");
    let fetchGifs;

    useEffect(() => {
        setDisplayGif(false);
        setTimeout(() => {
            if(searchValue !== '') {
                setValue(searchValue);
                setDisplayGif(true);   
            }
        }, 50);
      }, [searchValue]); 
    
    fetchGifs = (offset: number) => 
    gf.search(searchValue, { offset, sort: 'relevant'});
    
    return (
        <>
        {
          !displayGif && <CenteredCircularProgress />  
        }
        {
            displayGif && 
            <>
                <Grid
                    fetchGifs={fetchGifs}
                    width={width}
                    columns={5}
                    gutter={6}
                />
                <ResizeObserver
                    onResize={({ width }: any) => {
                    setWidth(width);
                    }}
                />
            </>
        } 
        </>
      );
}

export default GiphyImages;