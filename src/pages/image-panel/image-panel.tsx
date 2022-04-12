
import { Masonry } from "masonic";
import { FC } from "react";
import "./image-panel.css";

type Props = {
    images: any;
    handleOpenImageModal: (id: number, isRendition: boolean) => void,
    isRendition: boolean
};
export const ImagePanel:FC<Props> = ({images, handleOpenImageModal, isRendition}) => {
    const card = ({ data: { id, name, src, width, height } } : any) => {
        return (
            <div className="card">
              <img width= {width} height = {height} className="img" alt={name} src={src} onClick={() => handleOpenImageModal(id, isRendition)}
              style={{background: "gray"}}/>
            </div>
        )
    };


    return(
        <>
            <main className="container">
                <div className="masonic">
                    <Masonry
                        // Provides the data for our grid items
                        items={images}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 200px
                        columnWidth={200}
                        // Pre-renders 10 windows worth of content
                        overscanBy={10}
                        // This is the grid item component
                        render={card}
                    />
                </div>
            </main>
            </>
      )
}

