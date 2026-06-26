import { useId } from 'react';
import { videoSources } from '../../data/siteData';

type VideoTextLogoProps = {
  compact?: boolean;
  onClick?: () => void;
};

export default function VideoTextLogo({ compact = false, onClick }: VideoTextLogoProps) {
  const maskId = useId().replace(/:/g, '');

  return (
    <a
      href="#topo"
      aria-label="Ir para o início"
      className="block focus:outline-none focus:ring-2 focus:ring-sky-300"
      onClick={(event) => {
        if (!onClick) return;

        event.preventDefault();
        onClick();
      }}
    >
      {/* === MASCARA DE VIDEO DO LOGOTIPO | inicio === */}
      <svg
        viewBox="0 0 440 82"
        role="img"
        aria-label="VINY DRONE"
        className={`video-mask-text block ${compact ? 'h-9 w-44 sm:h-10 sm:w-52' : 'h-12 w-64'}`}
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width="440" height="82" fill="black" />
            <text
              x="0"
              y="58"
              fill="white"
              fontFamily="Rajdhani, Arial, sans-serif"
              fontWeight="950"
              fontSize="58"
              letterSpacing="-3"
            >
              VINY DRONE
            </text>
          </mask>
        </defs>
        <foreignObject x="0" y="0" width="440" height="82" mask={`url(#${maskId})`}>
          <video
            className="h-full w-full object-cover"
            src={videoSources.logo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </foreignObject>
      </svg>
      {/* === MASCARA DE VIDEO DO LOGOTIPO | fim === */}
    </a>
  );
}
