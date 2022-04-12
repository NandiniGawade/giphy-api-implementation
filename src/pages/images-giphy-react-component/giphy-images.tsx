import { GifsResult, GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import { FC, useEffect, useState } from "react";
import ResizeObserver from "react-resize-observer";


type Props = {
    searchValue: string
}
const gf = new GiphyFetch("tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ");

const GiphyImages: FC<Props> = ({searchValue}) => {
    console.log(searchValue);
    const [width, setWidth] = useState(window.innerWidth);
    const [displayGif, setDisplayGif] = useState(true)
    const [value, setValue] = useState("");
    let fetchGifs;

    useEffect(() => {
        setDisplayGif(false);
        setTimeout(() => {
            if(searchValue !== '') {
                setValue(searchValue)
            }
            if(value !== searchValue) {
                setDisplayGif(true);   
            }
        }, 50);
      }, [searchValue]); 
    
    fetchGifs = (offset: number) => 
    gf.search(searchValue, { offset, sort: 'relevant'});
    
    return (
        <>
        {
            displayGif && 
            <>
                <Grid
                    fetchGifs={fetchGifs}
                    width={width}
                    columns={3}
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