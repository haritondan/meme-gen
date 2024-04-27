import React, { useState } from 'react';
import MemeForm from '../meme-form/meme-form';
import MemeDisplay from '../meme-display/meme-display';

const images = [
    '/images/1`.jpg',
    '/images/2`.jpg',
    '/images/3`.jpg',
    '/images/4`.jpg',
    '/images/5`.jpg',
    '/images/6`.jpg',
    '/images/7`.jpg',
    '/images/8`.jpg',
    '/images/9`.jpg',
    '/images/10`.jpg',
    '/images/11`.jpg',
    '/images/12`.jpg',
    '/images/13`.jpg',
    '/images/14`.jpg',
    '/images/15`.jpg',
    '/images/16`.jpg',
];

const MemeGenerator: React.FC = () => {
  const [topCaption, setTopCaption] = useState('');
  const [bottomCaption, setBottomCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerate = (topCaption: string, bottomCaption: string) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setImageUrl(randomImage);
    setTopCaption(topCaption);
    setBottomCaption(bottomCaption);
  };

  return (
    <div className="meme-generator">
      <MemeForm onGenerate={handleGenerate} />
      {imageUrl && <MemeDisplay topCaption={topCaption} bottomCaption={bottomCaption} imageUrl={imageUrl} />}
    </div>
  );
};

export default MemeGenerator;
