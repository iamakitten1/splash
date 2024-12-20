import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'; 
import { fetchPhotos } from '../api/unsplashApi';
import { useDebounce } from '../hooks/useDebounce'; 
import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar'; 
import Pagination from '../components/Pagination'; 

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

 
  const { data: photos, isLoading } = useQuery({
    queryKey: ['photos', page, debouncedSearchTerm], 
    queryFn: () => fetchPhotos(page, debouncedSearchTerm),
    keepPreviousData: true, 
  });

  return (
    <div className="p-4">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {isLoading ? (
        <p>Loading...</p> 
      ) : (
        <ImageList photos={photos || []} onPhotoClick={function (_id: string): void {
                      throw new Error('Function not implemented.');
                  } } /> 
      )}
      <Pagination currentPage={page} onPageChange={setPage} /> 
    </div>
  );
};

export default HomePage;
