import axios from 'axios';

const API_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const unsplashApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
});

export const fetchPhotos = async (page: number, query: string) => {
  const endpoint = query ? '/search/photos' : '/photos';
  const { data } = await unsplashApi.get(endpoint, {
    params: { query, page, per_page: 20 },
  });
  return query ? data.results : data;
};

export const fetchPhotoDetails = async (id: string) => {
  const { data } = await unsplashApi.get(`/photos/${id}`);
  return data;
};
