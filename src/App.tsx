import React from 'react';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <HelloWorld name="World" />
    </React.StrictMode>
  );
};

export default App;
