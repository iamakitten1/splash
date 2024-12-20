import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const fetchPhotoDetails = async (id: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/${id}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );
  return response.data[0];
};

export { fetchPhotoDetails };
