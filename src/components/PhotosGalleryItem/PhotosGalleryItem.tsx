// import GridItem from "../GridItem/GridItem";

// import styles from "./PhotosGalleryItem.module.css";

import type { Photo } from "../../types/photo";

interface PhotosGalleryItemProps {
  photo: Photo;
  onClick: () => void;
}

const PhotosGalleryItem = ({ photo, onClick }: PhotosGalleryItemProps) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: photo.avg_color, borderColor: photo.avg_color }}
      className="thumb"
    >
      <img src={photo.src.large} alt={photo.alt} />
    </div>
  );
};

export default PhotosGalleryItem;
