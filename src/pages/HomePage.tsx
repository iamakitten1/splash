import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../api/unsplashApi';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data: photos, isLoading, isError, error } = useQuery({
    queryKey: ['photos', page],
    queryFn: () => fetchPhotos(page),
    keepPreviousData: true,
  });

  return (
    <div className="p-4">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Error: {(error as Error).message}</p>
      ) : (
        <ImageList
          photos={photos || []}
          onPhotoClick={(id) => (window.location.href = `/photo/${id}`)}
        />
      )}
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;
