import React from 'react';
import WhiteKey from './WhiteKey';

// Budding Pop (cute white sprout character with party hat holding birthday cake) GIFs
const GIFS = {
  normal: 'https://media1.tenor.com/m/vuafm8ov--kAAAAd/budding-pop-happy-birthday.gif', // animated character holding cake before cut
  happy: 'https://media1.tenor.com/m/HUE4JTKq5V0AAAAC/leaf-budding-pop.gif',   // animated character celebrating after cut
};

export default function BunnyCake({ className = '', mood = 'normal', size = 220 }) {
  const src = GIFS[mood] || GIFS.normal;

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <WhiteKey />
      <img
        key={src}
        src={src}
        alt="Budding Pop Birthday Character"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/bunny_cake.png';
        }}
        style={{ filter: 'url(#white-to-alpha)' }}
        className={`w-full h-full object-contain select-none pointer-events-none ${
          mood === 'happy' ? 'animate-bounce' : 'animate-bounce-slow'
        }`}
      />
    </div>
  );
}

