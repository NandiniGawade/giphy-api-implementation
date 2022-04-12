import { KeyValue } from '../interfaces/KeyValue';
import { GiphyFetch } from "@giphy/js-fetch-api";

export type ImageResponse = {
  errorFlag: boolean,
  data: Object,
  error: unknown
  imageList?: Object,
  originalImageList?: string[],
  pagination?: KeyValue
};


const giphyFetch = new GiphyFetch("tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ");

/**
 * This method will fetch treading gif images from Giphy API.
 * @param offset Starting position of the results.
 * @returns ImageResponse
 */
const getImages = async (offset: number): Promise<ImageResponse> => {
  try {
    const response = await giphyFetch.trending({ offset });
    const imageList =response.data.map((item: KeyValue) => item.images);
    const originalImageList: string[] = imageList.map((item) => item.original.url);
    return {
        errorFlag: false,
        imageList,
        data: response,
        error: {},
        originalImageList,
        pagination: response.pagination
    };
  }
  catch (e: unknown) {
    return {
      errorFlag: true,
      data: [],
      error: e
    };
  }
};

export default getImages;