import axios from 'axios';

const fetchPhotoDetails = async (id: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/${id}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.VITE_UNSPLASH_API_KEY}`,
      },
    }
  );
  return response.data[0];
};

export { fetchPhotoDetails };
