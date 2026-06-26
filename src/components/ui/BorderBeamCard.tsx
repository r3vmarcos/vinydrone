import type { ReactNode } from 'react';

type BorderBeamCardProps = {
  children: ReactNode;
  className?: string;
};

export default function BorderBeamCard({ children, className = '' }: BorderBeamCardProps) {
  return (
    <div className={`border-beam-wrapper rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-drone backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
