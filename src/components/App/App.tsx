// import Section from "../Section/Section";
// import Container from "../Container/Container";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Loader from "../Loader/Loader";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const results = await getPhotos(query);
      setPhotos(results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoClick = (photo: Photo) => {
    alert(`You clicked photo id: ${photo.id}`);
  };

  return (
    <div>
      <Form onSubmit={handleSearch} />
      {isError && <p>Oops, something went wrong...</p>}
      {isLoading && <Loader />}
      {/* <isLoading && <p>Loading...</p>/> */}
      <PhotosGallery photos={photos} onPhotoClick={handlePhotoClick} />
    </div>
  );
}
