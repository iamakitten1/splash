// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
// // import { fetchPhotos } from '../api/unsplashApi';
// import { fetchPhotoDetails } from '../api/fetchPhotoDetails';

// const ImageDetailPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();

//   const { data: photo, isLoading } = useQuery(['photo', id], () =>
//     fetchPhotoDetails(1).then((photos) => photos.find((p: any) => p.id === id))
//   );

//   if (isLoading) return <p>Loading...</p>;
//   if (!photo) return <p>Photo not found</p>;

//   return (
//     <div className="p-4">
//       <img src={photo.urls.full} alt={photo.alt_description} className="w-full max-w-4xl mx-auto" />
//       <p className="mt-4">{photo.alt_description}</p>
//     </div>
//   );
// };

// export default ImageDetailPage;
