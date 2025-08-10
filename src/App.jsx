import { useState } from 'react';

import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const images = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1015/600/400',
      alt: 'Mountain landscape with a river',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1016/600/400',
      alt: 'Foggy forest in the morning',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/1018/600/400',
      alt: 'Rocky beach with crashing waves',
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/id/1020/600/400',
      alt: 'Calm lake surrounded by trees',
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/id/1024/600/400',
      alt: 'Close-up of a dog’s face',
    },
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
}

export default App;
