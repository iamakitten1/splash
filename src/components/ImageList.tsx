interface ImageListProps {
    photos: Array<{ id: string; urls: { thumb: string } }>;
    onPhotoClick: (id: string) => void;
  }
  
  const ImageList: React.FC<ImageListProps> = ({ photos, onPhotoClick }) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} onClick={() => onPhotoClick(photo.id)}>
            <img src={photo.urls.thumb} alt="photo" />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageList;
  