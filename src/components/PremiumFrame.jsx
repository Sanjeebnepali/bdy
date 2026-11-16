import React from 'react';

// Rose-gold / champagne metallic palette
const GOLD =
  'linear-gradient(135deg, #fff1c9 0%, #f6c76b 18%, #b9812e 38%, #ffe7a3 52%, #d9a441 70%, #8a5a1c 88%, #f8d98a 100%)';
const ROSE_GOLD =
  'linear-gradient(135deg, #ffe4ec 0%, #f4b6c8 22%, #c97a93 45%, #ffd6e0 60%, #e29bb0 80%, #b4617c 100%)';

function Corner({ className = '', size = 34 }) {
  // Filigree corner ornament, drawn for the top-left and rotated for the others
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1c9" />
          <stop offset="0.45" stopColor="#d9a441" />
          <stop offset="1" stopColor="#8a5a1c" />
        </linearGradient>
      </defs>
      <path
        d="M3 37 V12 C3 6 6 3 12 3 H37"
        fill="none"
        stroke="url(#pf-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M9 31 V15 C9 11.5 11.5 9 15 9 H31"
        fill="none"
        stroke="url(#pf-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="12" cy="12" r="3.2" fill="url(#pf-gold)" />
      <circle cx="12" cy="12" r="1.2" fill="#fff7e0" />
      <circle cx="3" cy="37" r="1.6" fill="url(#pf-gold)" />
      <circle cx="37" cy="3" r="1.6" fill="url(#pf-gold)" />
    </svg>
  );
}

/**
 * Premium birthday frame.
 *
 * variant: 'gold' (default) | 'rose'
 * ratio:   CSS aspect-ratio for the picture window, e.g. '4 / 5'. Omit to size by children.
 * ribbon:  optional small text on a pink ribbon hung on the top edge
 */
export default function PremiumFrame({
  children,
  variant = 'gold',
  ratio,
  ribbon,
  radius = 22,
  className = '',
  windowClassName = '',
  shimmer = true,
}) {
  const metal = variant === 'rose' ? ROSE_GOLD : GOLD;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        borderRadius: radius,
        padding: 7,
        background: metal,
        boxShadow:
          '0 14px 34px rgba(190, 90, 130, 0.35), 0 3px 8px rgba(120, 70, 20, 0.25), inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -2px 3px rgba(90, 50, 10, 0.35)',
      }}
    >
      {/* inner cream mat */}
      <div
        style={{
          borderRadius: radius - 6,
          padding: 6,
          background: 'linear-gradient(160deg, #fffaf0 0%, #fff0f5 55%, #fde8ef 100%)',
          boxShadow: 'inset 0 2px 5px rgba(120, 70, 20, 0.28), inset 0 0 0 1px rgba(201,150,60,0.55)',
        }}
      >
        {/* picture window with thin inner gold keyline */}
        <div
          className={`relative overflow-hidden ${windowClassName}`}
          style={{
            borderRadius: radius - 12,
            aspectRatio: ratio,
            boxShadow:
              '0 0 0 1.5px rgba(201,150,60,0.9), inset 0 0 18px rgba(80, 30, 50, 0.28)',
            background: '#fff0f5',
          }}
        >
          {children}

          {/* soft vignette so any photo/video feels cinematic */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 30,
              background:
                'radial-gradient(ellipse at center, rgba(0,0,0,0) 62%, rgba(60,10,40,0.22) 100%)',
            }}
          />
          {/* glass shine sweep */}
          {shimmer && <div className="pf-shine" style={{ zIndex: 31 }} />}
        </div>
      </div>

      <Corner className="top-0.5 left-0.5" />
      <Corner className="top-0.5 right-0.5 rotate-90" />
      <Corner className="bottom-0.5 right-0.5 rotate-180" />
      <Corner className="bottom-0.5 left-0.5 -rotate-90" />

      {ribbon && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-3 px-4 py-0.5 text-[11px] font-extrabold tracking-wide text-white whitespace-nowrap font-['Itim',_cursive]"
          style={{
            zIndex: 40,
            background: 'linear-gradient(90deg, #ec4899, #f43f5e 55%, #ec4899)',
            borderRadius: 999,
            border: '1.5px solid #f6c76b',
            boxShadow: '0 4px 10px rgba(236,72,153,0.45)',
          }}
        >
          {ribbon}
        </div>
      )}
    </div>
  );
}
