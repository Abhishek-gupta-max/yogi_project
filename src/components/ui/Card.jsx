import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
  padding = 'normal',
  ...props
}) {
  const paddings = {
    none: 'p-0',
    tight: 'p-4 md:p-5',
    normal: 'p-6 md:p-8',
    loose: 'p-8 md:p-12',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={clsx(
        'glass-card relative overflow-hidden group rounded-3xl',
        glow && 'border-accent/40',
        hover && 'hover:-translate-y-1',
        paddings[padding],
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
