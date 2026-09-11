/**
 * Persistent Local Photo Storage & File Handler
 * Enables drag & drop, file selection, and copy-paste from local folders without needing links.
 */

const STORAGE_PREFIX = 'henna_kushangi_photo_';

/**
 * Resizes and converts a File into an optimized DataURL to fit comfortably in browser storage.
 */
export async function fileToOptimizedDataUrl(file: File, maxWidth = 1200, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to parse image data'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function getStoredPhoto(key: string): string | null {
  try {
    return localStorage.getItem(STORAGE_PREFIX + key);
  } catch {
    return null;
  }
}

export function saveStoredPhoto(key: string, dataUrl: string): boolean {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, dataUrl);
    window.dispatchEvent(new CustomEvent('henna_photos_updated', { detail: { key, dataUrl } }));
    return true;
  } catch (err) {
    console.warn('LocalStorage limit reached when saving photo', err);
    return false;
  }
}

export function removeStoredPhoto(key: string): void {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
    window.dispatchEvent(new CustomEvent('henna_photos_updated', { detail: { key, removed: true } }));
  } catch (err) {
    console.warn('Failed to remove photo from storage', err);
  }
}

export function getAllStoredPhotos(): Record<string, string> {
  const result: Record<string, string> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(STORAGE_PREFIX)) {
        const cleanKey = k.replace(STORAGE_PREFIX, '');
        const val = localStorage.getItem(k);
        if (val) result[cleanKey] = val;
      }
    }
  } catch (e) {
    console.warn('Could not list stored photos', e);
  }
  return result;
}
