import React, { useState, useEffect, useRef } from 'react';
import { Upload, CheckCircle2, RefreshCw, X, Image as ImageIcon, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { fileToOptimizedDataUrl, getStoredPhoto } from '../utils/photoStorage';

export interface PhotoSlot {
  key: string;
  targetFilename: string;
  order: number;
  label: string;
  sourceName: string;
  description: string;
  aspect: string;
}

export const PHOTO_ORDER: PhotoSlot[] = [
  {
    key: 'logo',
    targetFilename: 'logo.png',
    order: 1,
    label: 'Official Brand Logo',
    sourceName: '1000268521.png',
    description: 'Circular HK monogram with lotus & mehndi hand',
    aspect: 'aspect-square',
  },
  {
    key: 'work1',
    targetFilename: 'work1.jpg',
    order: 2,
    label: 'Portfolio 1: Lotus Hand Art',
    sourceName: 'Post_02.jpeg',
    description: 'Intricate lotus on wrists & fingers with black henna stain',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'work2',
    targetFilename: 'work2.jpg',
    order: 3,
    label: 'Portfolio 2: Garden Mandala',
    sourceName: 'WhatsApp ... 10.32.27 AM (1).jpeg',
    description: 'Back-of-hand circular mandala with lace cuff in lush garden',
    aspect: 'aspect-square',
  },
  {
    key: 'work3',
    targetFilename: 'work3.jpg',
    order: 4,
    label: 'Portfolio 3: Royal Feet Adornment',
    sourceName: 'WhatsApp ... 10.32.29 AM (1).jpeg',
    description: 'Bridal feet & ankle mehndi with swan motifs & chandelier beads',
    aspect: 'aspect-square',
  },
  {
    key: 'work4',
    targetFilename: 'work4.jpg',
    order: 5,
    label: 'Portfolio 4: Mahogany Stain & Ring',
    sourceName: 'WhatsApp ... 10.32.29 AM.jpeg',
    description: 'Rich dark henna stain on back of hands with gold ring',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'work5',
    targetFilename: 'work5.jpg',
    order: 6,
    label: 'Portfolio 5: Royal Peacock Forearms',
    sourceName: 'WhatsApp ... 10.29.26 AM (2).jpeg',
    description: 'Full bridal forearms & palms with peacocks and royal elephants',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'work6',
    targetFilename: 'work6.jpg',
    order: 7,
    label: 'Portfolio 6: Symmetrical Palms & Jaal',
    sourceName: 'WhatsApp ... 2.24.58 PM.jpeg',
    description: 'Bridal palms & wrists with floral jaal and arches',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'work7',
    targetFilename: 'work7.jpg',
    order: 8,
    label: 'Portfolio 7: Dual Silk Mandalas',
    sourceName: 'WhatsApp ... 2.25.03 PM.jpeg',
    description: 'Dual back-of-hand mandalas with lace netting on pink silk',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'work8',
    targetFilename: 'work8.jpg',
    order: 9,
    label: 'Portfolio 8: Bridal Palms & Paisleys',
    sourceName: 'WhatsApp ... 2.25.05 PM.jpeg',
    description: 'Intricate bridal palms, paisleys, and fine jaal mesh',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'hero',
    targetFilename: 'hero.jpg',
    order: 10,
    label: 'Hero Banner: White Rose Art',
    sourceName: 'Post_01.jpeg',
    description: 'Signature bridal hand holding white rose announcement artwork',
    aspect: 'aspect-[4/5]',
  },
];

async function saveFileToDisk(filename: string, dataUrl: string): Promise<boolean> {
  try {
    const res = await fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, base64Data: dataUrl }),
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to save file to disk:', err);
    return false;
  }
}

export const PermanentPhotoImporter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({
    'hero.jpg': true, // hero.jpg is already saved from kushangi_hero_art
    'bridal.jpg': true,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);

  // Auto-sync any existing photos from localStorage to disk on initial load
  useEffect(() => {
    const syncExistingLocalStorage = async () => {
      let syncedCount = 0;
      for (const slot of PHOTO_ORDER) {
        const stored = getStoredPhoto(slot.key);
        if (stored && stored.startsWith('data:image/')) {
          const success = await saveFileToDisk(slot.targetFilename, stored);
          if (success) {
            syncedCount++;
            setSavedStatus(prev => ({ ...prev, [slot.targetFilename]: true }));
            if (slot.key === 'hero') {
              await saveFileToDisk('bridal.jpg', stored);
            }
          }
        }
      }
      if (syncedCount > 0) {
        setNotification(`Auto-synced ${syncedCount} photo(s) from browser cache to permanent repository files!`);
      }
    };

    syncExistingLocalStorage();
  }, []);

  const handleBatchFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    if (fileArray.length === 0) return;

    setIsSaving(true);
    setNotification('Saving your photos permanently to repository files...');

    let saved = 0;

    // First try to match by exact or partial original filenames
    for (const file of fileArray) {
      const lowerName = file.name.toLowerCase();
      let matchedSlot: PhotoSlot | undefined;

      if (lowerName.includes('1000268521') || lowerName.includes('logo')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'logo');
      } else if (lowerName.includes('post_02') || (lowerName.includes('post') && lowerName.includes('2'))) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work1');
      } else if (lowerName.includes('10.32.27')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work2');
      } else if (lowerName.includes('10.32.29') && lowerName.includes('(1)')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work3');
      } else if (lowerName.includes('10.32.29')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work4');
      } else if (lowerName.includes('10.29.26')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work5');
      } else if (lowerName.includes('2.24.58')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work6');
      } else if (lowerName.includes('2.25.03')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work7');
      } else if (lowerName.includes('2.25.05')) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'work8');
      } else if (lowerName.includes('post_01') || (lowerName.includes('post') && lowerName.includes('1'))) {
        matchedSlot = PHOTO_ORDER.find(s => s.key === 'hero');
      }

      if (matchedSlot) {
        try {
          const dataUrl = await fileToOptimizedDataUrl(file, 1600, 0.9);
          const ok = await saveFileToDisk(matchedSlot.targetFilename, dataUrl);
          if (ok) {
            saved++;
            setSavedStatus(prev => ({ ...prev, [matchedSlot!.targetFilename]: true }));
            if (matchedSlot.key === 'hero') {
              await saveFileToDisk('bridal.jpg', dataUrl);
            }
          }
        } catch (e) {
          console.error(`Error saving ${file.name}:`, e);
        }
      }
    }

    // If filenames didn't match (e.g. user selected exactly in given order 1 to 10):
    if (saved === 0 && fileArray.length > 0) {
      for (let i = 0; i < Math.min(fileArray.length, PHOTO_ORDER.length); i++) {
        const file = fileArray[i];
        const slot = PHOTO_ORDER[i];
        try {
          const dataUrl = await fileToOptimizedDataUrl(file, 1600, 0.9);
          const ok = await saveFileToDisk(slot.targetFilename, dataUrl);
          if (ok) {
            saved++;
            setSavedStatus(prev => ({ ...prev, [slot.targetFilename]: true }));
            if (slot.key === 'hero') {
              await saveFileToDisk('bridal.jpg', dataUrl);
            }
          }
        } catch (e) {
          console.error(`Error saving slot ${i}:`, e);
        }
      }
    }

    setIsSaving(false);
    setNotification(`Successfully saved ${saved} photo(s) permanently to /public/images/! Refresh to see.`);
  };

  const handleSingleSlotUpload = async (slot: PhotoSlot, file: File) => {
    setIsSaving(true);
    try {
      const dataUrl = await fileToOptimizedDataUrl(file, 1600, 0.9);
      const ok = await saveFileToDisk(slot.targetFilename, dataUrl);
      if (ok) {
        setSavedStatus(prev => ({ ...prev, [slot.targetFilename]: true }));
        if (slot.key === 'hero') {
          await saveFileToDisk('bridal.jpg', dataUrl);
        }
        setNotification(`Saved ${slot.label} permanently to /public/images/${slot.targetFilename}!`);
      }
    } catch (err) {
      console.error(err);
      setNotification(`Failed to save ${slot.label}. Please try again.`);
    } finally {
      setIsSaving(false);
    }
  };

  const totalSaved = Object.values(savedStatus).filter(Boolean).length;

  return (
    <>
      {/* Discreet floating action banner in bottom corner */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          id="open-photo-importer-button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#4A2619] hover:bg-[#633928] text-[#FDFBF7] rounded-full shadow-xl border border-[#C5A059]/40 transition-all transform hover:scale-[1.03] text-xs sm:text-sm font-medium"
        >
          <Upload className="w-4 h-4 text-[#C5A059]" />
          <span>Save 10 Photos to Git ({totalSaved}/10 Saved)</span>
        </button>
      </div>

      {/* Full Modal Importer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#FAF7F2] border border-[#C5A059]/40 rounded-2xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl relative my-auto max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#EADCC9]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A2619]/10 rounded-full text-xs font-semibold text-[#4A2619] mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Permanent Repository Storage</span>
                </div>
                <h2 className="font-heading-luxury text-xl sm:text-2xl text-[#4A2619]">
                  Save Your 10 Photos Permanently
                </h2>
                <p className="text-xs sm:text-sm text-[#7D6E65] mt-0.5">
                  Files are saved directly to <code className="bg-[#EDE5DA] px-1.5 py-0.5 rounded text-[#4A2619] font-mono text-xs">/public/images/</code> so they remain permanently in your GitHub repository and live published site.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#7D6E65] hover:text-[#4A2619] hover:bg-[#EADCC9]/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notification alert */}
            {notification && (
              <div className="mt-3 p-3 bg-[#EBF2EA] border border-[#3E4D35]/30 rounded-xl text-xs text-[#2A3723] flex items-center justify-between">
                <span>{notification}</span>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-1 font-semibold text-[#3E4D35] hover:underline ml-2"
                >
                  <RefreshCw className="w-3 h-3" /> Refresh Preview
                </button>
              </div>
            )}

            {/* Batch Upload Dropzone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleBatchFiles(e.dataTransfer.files);
              }}
              className="mt-4 p-5 sm:p-6 bg-white border-2 border-dashed border-[#C5A059] rounded-xl text-center hover:bg-[#FDFBF7] transition-all cursor-pointer group"
              onClick={() => multiFileInputRef.current?.click()}
            >
              <input
                ref={multiFileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files && handleBatchFiles(e.target.files)}
              />
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#4A2619] group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-heading-luxury text-base sm:text-lg text-[#4A2619] mt-2">
                Click to Select or Drag & Drop Your 10 Photos Here
              </h3>
              <p className="text-xs text-[#7D6E65] mt-1">
                You can select all 10 image files together. The system matches each file to its exact portfolio slot!
              </p>
            </div>

            {/* 10 Labeled Slots List */}
            <div className="mt-4 flex-1 overflow-y-auto pr-1 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#7D6E65] font-medium px-1">
                <span>10 Portfolio Positions (In Given Order)</span>
                <span>{totalSaved} of 10 Stored</span>
              </div>

              {PHOTO_ORDER.map((slot) => {
                const isSaved = Boolean(savedStatus[slot.targetFilename]);
                return (
                  <div
                    key={slot.key}
                    className="p-3 bg-white border border-[#EADCC9] rounded-xl flex items-center justify-between gap-3 hover:border-[#C5A059]/60 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-xs font-bold text-[#4A2619] shrink-0">
                        {slot.order}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-xs sm:text-sm text-[#4A2619] truncate">
                            {slot.label}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 bg-[#FAF7F2] border border-[#EADCC9] rounded text-[#7D6E65] font-mono shrink-0">
                            {slot.targetFilename}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7D6E65] truncate mt-0.5">
                          {slot.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isSaved ? (
                        <div className="flex items-center gap-1 text-[11px] text-[#2F6B38] font-medium bg-[#EBF5EC] px-2.5 py-1 rounded-full border border-[#2F6B38]/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B38]" />
                          <span>Saved to Git</span>
                        </div>
                      ) : (
                        <label className="cursor-pointer text-[11px] font-medium text-[#4A2619] hover:text-[#C5A059] bg-[#FAF7F2] hover:bg-[#F3ECE0] px-3 py-1.5 rounded-lg border border-[#C5A059]/40 transition-colors inline-flex items-center gap-1.5">
                          <Upload className="w-3 h-3" />
                          <span>Upload</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleSingleSlotUpload(slot, file);
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer actions */}
            <div className="mt-4 pt-3 border-t border-[#EADCC9] flex items-center justify-between">
              <span className="text-xs text-[#7D6E65]">
                Saved files are located at <code className="font-mono text-[#4A2619]">/public/images/</code>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.location.reload()}
                  className="px-3 py-1.5 text-xs text-[#4A2619] hover:bg-[#EADCC9]/50 rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reload Preview
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 text-xs font-medium text-white bg-[#4A2619] hover:bg-[#633928] rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
