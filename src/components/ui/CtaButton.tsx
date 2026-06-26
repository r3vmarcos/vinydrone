import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type CtaButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'whatsapp';
};

const variants: Record<NonNullable<CtaButtonProps['variant']>, string> = {
  primary: 'border-white/15 bg-white text-neutral-950 hover:bg-sky-100',
  ghost: 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10',
  whatsapp: 'border-emerald-300/40 bg-emerald-400 text-emerald-950 hover:bg-emerald-300',
};

export default function CtaButton({ children, variant = 'primary', className = '', ...props }: CtaButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-bold tracking-wide shadow-drone transition focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-950 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
