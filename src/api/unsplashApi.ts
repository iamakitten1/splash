import axios from 'axios';

const API_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const unsplashApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

// Fetch all photos
export const fetchPhotos = async (page: number, query?: string) => {
  const params: any = { per_page: 20, page };
  if (query) params.query = query;
  const endpoint = query ? '/search/photos' : '/photos';
  const response = await unsplashApi.get(endpoint, { params });
  return query ? response.data.results : response.data;
};

// Fetch a single photo
export const fetchPhotoDetails = async (id: string) => {
  const response = await unsplashApi.get(`/photos/${id}`);
  return response.data;
};
