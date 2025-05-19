import axios from "axios";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

export const getPhotos = async (query: string): Promise<Photo[]> => {
  const response = await axios.get("search", { params: { query } });
  return response.data.photos;
};

export interface Photo {
  id: number;
  avg_color: string;
  alt: string;
  src: {
    large: string;
    original: string;
  };
}
