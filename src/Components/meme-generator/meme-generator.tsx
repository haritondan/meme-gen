import React, { useState } from 'react';
import MemeForm from '../meme-form/meme-form';
import MemeDisplay from '../meme-display/meme-display';

const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
    '/images/10.png',
    '/images/11.png',
    '/images/12.png',
    '/images/13.png',
    '/images/14.png',
    '/images/15.png',
    '/images/16.png'
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
