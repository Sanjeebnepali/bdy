import React from 'react';

// Hidden SVG filter that turns white/near-white pixels transparent (alpha derived from darkness).
// Use via style={{ filter: 'url(#white-to-alpha)' }} - works inside transformed parents,
// unlike mix-blend-mode, and keeps GIFs animated.
export default function WhiteKey() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter id="white-to-alpha" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          result="keyed"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  -1.5 -1.5 -1.5 0 4.3"
        />
        <feComposite in="keyed" in2="SourceAlpha" operator="in" />
      </filter>
    </svg>
  );
}
