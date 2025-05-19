// import Grid from "../Grid/Grid";
// import GridItem from "../GridItem/GridItem";
// import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import type { Photo } from "../../types/photo";

interface PhotosGalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotosGallery = ({ photos, onPhotoClick }: PhotosGalleryProps) => {
  if (!photos.length) return null;

  return (
    <ul /*className={style.gallery}*/>
      {photos.map((photo) => (
        <li
          key={photo.id}
          // className={css.item}
          onClick={() => onPhotoClick(photo)}
          style={{
            backgroundColor: photo.avg_color,
            borderColor: photo.avg_color,
          }}
        >
          <img src={photo.src.large} alt={photo.alt} />
        </li>
      ))}
    </ul>
  );
};

export default PhotosGallery;
