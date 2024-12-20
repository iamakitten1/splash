import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../api/unsplashApi';
import { useDebounce } from '../hooks/useDebounce';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const [page, setPage] = useState(1);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: photos, isLoading, isError, error } = useQuery({
    queryKey: ['photos', page, debouncedSearchTerm],
    queryFn: () => fetchPhotos(page, debouncedSearchTerm),
    keepPreviousData: true, // Keeps previous data while new data is loading
  });

  return (
    <div className="p-4">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Error: {(error as Error).message}</p>
      ) : (
        <div className="space-y-4">
          <ImageList
            photos={photos || []}
            onPhotoClick={(id: string) => window.location.href = `/photo/${id}`} // Navigate to the photo page
          />
        </div>
      )}
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        className="mt-4 flex justify-center "
      />
    </div>
  );
};

export default HomePage;
