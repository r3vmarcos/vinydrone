import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({ eyebrow, title, description, align = 'left', className = '' }: SectionTitleProps) {
  const alinhamentoClasse = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`${alinhamentoClasse} max-w-3xl ${className}`}
    >
      <p className="titulo-secao-destaque">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
