// Photos dataset of the birthday girl

import iceCreamImg from '../assets/photos/icecream.jpeg';
import mirrorSelfieImg from '../assets/photos/mirror-selfie.jpeg';
import streetMirrorImg from '../assets/photos/street-mirror.jpeg';
import broccoliImg from '../assets/photos/broccoli.jpeg';

// Full photos used as portrait/backdrop images on the intro & message screens
export const TRANSPARENT_CUTOUTS = {
  sunglasses: mirrorSelfieImg,
  royal: broccoliImg,
};

export const CHRONOLOGICAL_PHOTOS = [
  {
    id: 'mirror-selfie',
    url: mirrorSelfieImg,
    ageTag: 'Smile Always 😊',
    title: 'Happy Looks Good On You 🌸',
    subtitle: 'Peace sign & the sweetest smile...',
    description: 'Pure cuteness, sparkling in every mirror she finds.',
    badge: 'Cutie',
    color: 'from-pink-400 to-rose-400',
  },
  {
    id: 'street-mirror',
    url: streetMirrorImg,
    ageTag: 'Adventure Mode 📸',
    title: 'Catching Every Moment 💖',
    subtitle: 'Sunny skies & a perfect mirror shot...',
    description: 'Always finding the prettiest angle in every place.',
    badge: 'Explorer',
    color: 'from-sky-400 to-indigo-500',
  },
  {
    id: 'icecream',
    url: iceCreamImg,
    ageTag: 'Sweet Treats 🍦',
    title: 'Ice Cream Princess 🧸',
    subtitle: 'Cute bear cones & a happy foodie...',
    description: 'Life is sweeter with her around.',
    badge: 'Foodie',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'broccoli',
    url: broccoliImg,
    ageTag: 'Birthday Queen 👑',
    title: '21 & Fabulous ✨',
    subtitle: 'Giant broccoli, giant smile 🥦💕',
    description: 'The glowing centerpiece of today—mesmerizing and kind.',
    badge: 'Today’s Star',
    color: 'from-pink-500 via-rose-500 to-amber-500',
  },
];
