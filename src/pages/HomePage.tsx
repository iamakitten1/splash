import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../api/unsplashApi';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const [page, setPage] = useState<number>(1);

  const { data: photos, isLoading, isError, error } = useQuery({
    queryKey: ['photos', page, searchTerm],
    queryFn: () => fetchPhotos(page, searchTerm),
  });

  return (
    <div className="p-4 min-h-screen bg-green-100 pt-16">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500">
          Error: {(error as Error).message}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos?.map((photo: { id: React.Key | null | undefined; urls: { small: string | undefined; }; alt_description: any; }) => (
            <Link key={photo.id} to={`/photo/${photo.id}`}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description || 'Photo'}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </Link>
          ))}
        </div>
      )}
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;
