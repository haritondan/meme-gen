import React from 'react';

interface MemeDisplayProps {
  topCaption: string;
  bottomCaption: string;
  imageUrl: string;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({ topCaption, bottomCaption, imageUrl }) => {
  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context is null or undefined.');
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(topCaption, canvas.width / 2, 10);
      ctx.fillText(bottomCaption, canvas.width / 2, canvas.height - 50);

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = dataUrl;
      link.click();
    };

    img.src = imageUrl;
  };

  return (
    <div className="meme-display-container">
      <div className="meme-container">
        <img src={imageUrl} alt="Meme" />
        <div className="top-caption">{topCaption}</div>
        <div className="bottom-caption">{bottomCaption}</div>
      </div>
      <button onClick={handleDownload} className='downloadButton'>Download</button>
    </div>
  );
};

export default MemeDisplay;
