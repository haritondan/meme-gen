import React from 'react';

interface MemeDisplayProps {
  topCaption: string;
  bottomCaption: string;
  imageUrl: string;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({ topCaption, bottomCaption, imageUrl }) => {
  return (
    <div className="meme-container">
      <img src={imageUrl} alt="Meme" />
      <div className="top-caption">{topCaption}</div>
      <div className="bottom-caption">{bottomCaption}</div>
    </div>
  );
};

export default MemeDisplay;
