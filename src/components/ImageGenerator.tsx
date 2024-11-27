import React from 'react';
import { RefreshCw } from 'lucide-react';
import PromptInput from './PromptInput';
import StyleSelector from './StyleSelector';
import GeneratedImage from './GeneratedImage';
import { useImageGenerator } from '../hooks/useImageGenerator';

const ImageGenerator = () => {
  const {
    prompt,
    style,
    imageUrl,
    isGenerating,
    setPrompt,
    setStyle,
    handleGenerate,
    handleReset
  } = useImageGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          🎄 Generador de Imágenes Navideñas 🎄
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
          <PromptInput 
            prompt={prompt} 
            setPrompt={setPrompt} 
            disabled={isGenerating} 
          />
          
          <StyleSelector 
            style={style} 
            setStyle={setStyle} 
            disabled={isGenerating} 
          />
          
          {prompt && style && !imageUrl && (
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center">
                  <RefreshCw className="animate-spin mr-2" size={20} />
                  Generando...
                </span>
              ) : (
                'Generar Imagen'
              )}
            </button>
          )}
          
          <GeneratedImage 
            imageUrl={imageUrl} 
            onReset={handleReset} 
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;