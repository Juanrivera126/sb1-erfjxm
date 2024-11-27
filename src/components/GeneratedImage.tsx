import React from 'react';
import { RotateCcw } from 'lucide-react';

interface GeneratedImageProps {
  imageUrl: string | null;
  onReset: () => void;
}

const GeneratedImage = ({ imageUrl, onReset }: GeneratedImageProps) => {
  if (!imageUrl) return null;

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt="Imagen navideña generada"
          className="w-full h-auto"
        />
      </div>
      
      <button
        onClick={onReset}
        className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
      >
        <RotateCcw className="mr-2" size={20} />
        Reiniciar
      </button>
    </div>
  );
};

export default GeneratedImage;