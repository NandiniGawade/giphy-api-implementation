import { useEffect, useState } from "react";
import { FC } from "react";
import getImages from "../../components/image-list";
import { ImagePanel } from "../image-panel/image-panel";
import { Image } from "../../interfaces/image";
import { Box, Modal, Pagination, Typography } from "@mui/material";
import { KeyValue } from "../../interfaces/KeyValue";
import "./images.css";
import { CenteredCircularProgress } from "../loader/centered-circular-progress";
import { RENDITIONS_IMAGES } from "../../constants/app.constant";

/**
 * This component will render images from Giphy treading API.
 * Pagination is implemented, to avoid multiple request to the Giphy server.
 * Treading API will fetch 50 records each time. This is maximum limit.
 */

export const Images: FC = () => {
  const [imageList, setImageList] = useState<KeyValue>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalcount, setTotalcount] = useState(0);
  const [images, setImages] = useState<any>([]);
  const [renditionImages, setRenditionImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const items: Image[] = imageList?.map((item: string, index: number) => {
    return {
      id: index,
      src: item
    }
   });

  const handleOpenImageModal = (id: number, isRendition: boolean) => {
    if(isRendition) {
      let urls:Image[] = [];
      Object.values(images[id]).forEach((val: any, index: number) => {
        if(val.url !== undefined) {
          urls.push({
            id: index,
            src: val.url,
            width: `${val.width}px` ,
            height: `${val.height}px`
          })
        }
      });
      setRenditionImages(urls);
      setIsOpen(true)
    }
  };

  const handleClose = () => setIsOpen(false);

  const fetchDate = (offset: number) => {
    setIsLoading(true);
    getImages(offset)
      .then(response => {
          setTotalcount(Math.round((response?.pagination?.total_count) / 50));
          const list = response !== undefined && response?.originalImageList ? response?.originalImageList : [];
          setImageList(list);
          setImages(response?.imageList);
          setIsLoading(false);
      }).catch(error => {
          console.error(error)
      }); 
  }
  
  useEffect(() => {
    fetchDate(0)
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const handleChange = (_event: any, value:number) => {
  if(value === 1) {
    fetchDate(0)
  } else {
    setPage(value)
    fetchDate(( images.length ) * ( value - 1))
  }
}

  return(
    <>
    {isLoading && <CenteredCircularProgress />}
    {
      !isLoading && 
      <>
        <ImagePanel images={items} handleOpenImageModal={handleOpenImageModal} isRendition={true}/>
        <Pagination page={page} count={totalcount} variant="outlined" shape="rounded" onChange={handleChange} className="pagination-container"/> 
      </>
    }
      <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className="modal-header">
                  {RENDITIONS_IMAGES}
                </Typography>
                <div>
                  <ImagePanel images={renditionImages} handleOpenImageModal={handleOpenImageModal} isRendition={false}/>
                </div>
            </Box>
      </Modal>
    </>
    
  )
}

