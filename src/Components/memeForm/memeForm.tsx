import React, { useState } from 'react';

interface MemeFormProps {
  onGenerate: (topCaption: string, bottomCaption: string) => void;
}

const MemeForm: React.FC<MemeFormProps> = ({ onGenerate }) => {
  const [topCaption, setTopCaption] = useState('');
  const [bottomCaption, setBottomCaption] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(topCaption, bottomCaption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={topCaption} onChange={(e) => setTopCaption(e.target.value)} placeholder="Top Caption" />
      <input type="text" value={bottomCaption} onChange={(e) => setBottomCaption(e.target.value)} placeholder="Bottom Caption" />
      <button type="submit">Generate</button>
    </form>
  );
};

export default MemeForm;
