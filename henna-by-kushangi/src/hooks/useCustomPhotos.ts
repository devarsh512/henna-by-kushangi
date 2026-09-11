import { useState, useEffect, useCallback } from 'react';
import {
  getStoredPhoto,
  saveStoredPhoto,
  removeStoredPhoto,
  fileToOptimizedDataUrl
} from '../utils/photoStorage';

export function useCustomPhoto(key: string, defaultSrc: string) {
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return getStoredPhoto(key) || defaultSrc;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return Boolean(getStoredPhoto(key));
  });

  useEffect(() => {
    const handleUpdate = () => {
      const stored = getStoredPhoto(key);
      if (stored) {
        setCurrentSrc(stored);
        setIsCustom(true);
      } else {
        setCurrentSrc(defaultSrc);
        setIsCustom(false);
      }
    };

    window.addEventListener('henna_photos_updated', handleUpdate);
    return () => window.removeEventListener('henna_photos_updated', handleUpdate);
  }, [key, defaultSrc]);

  const updateWithFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, WEBP, etc.)');
      return false;
    }
    try {
      const dataUrl = await fileToOptimizedDataUrl(file);
      saveStoredPhoto(key, dataUrl);
      setCurrentSrc(dataUrl);
      setIsCustom(true);
      return true;
    } catch (e) {
      console.error('Error processing image file:', e);
      return false;
    }
  }, [key]);

  const resetToDefault = useCallback(() => {
    removeStoredPhoto(key);
    setCurrentSrc(defaultSrc);
    setIsCustom(false);
  }, [key, defaultSrc]);

  return {
    src: currentSrc,
    isCustom,
    updateWithFile,
    resetToDefault
  };
}
