import { useState } from 'react';

export const useImageCache = () => {
  const [cache, setCache] = useState<Map<string, any>>(new Map());

  const addToCache = (key: string, data: any) => {
    if (!cache.has(key)) {
      const newCache = new Map(cache);
      newCache.set(key, data);
      setCache(newCache);
    }
  };

  const getFromCache = (key: string) => cache.get(key);

  return { addToCache, getFromCache };
};
