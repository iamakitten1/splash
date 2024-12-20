interface ImageListProps {
  photos: Array<{ id: string; urls: { thumb: string } }>;
  onPhotoClick: (id: string) => void;
}

const ImageList: React.FC<ImageListProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-1 bg-green-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 "
          onClick={() => onPhotoClick(photo.id)}
        >
          <img
            src={photo.urls.thumb}
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
