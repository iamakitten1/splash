import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotoDetails } from '../api/fetchPhotoDetails';


const PhotoPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(
    ['photo', id],
    () => fetchPhotoDetails(id!), 
    
    { enabled: !!id } 
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1>Photo Details</h1>
      <img src={data?.urls?.full} alt={data?.description} />
      <p>{data?.description}</p>
      <p>Photographer: {data?.user?.name}</p>
    </div>
  );
};

export default PhotoPage;
