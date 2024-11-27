import { useState } from 'react';

export const useImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const pollinationsPrompt = `${prompt}, ${style}, christmas theme, holiday spirit`;
      const encodedPrompt = encodeURIComponent(pollinationsPrompt);
      const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setPrompt('');
    setStyle('');
    setImageUrl(null);
  };

  return {
    prompt,
    style,
    imageUrl,
    isGenerating,
    setPrompt,
    setStyle,
    handleGenerate,
    handleReset,
  };
};