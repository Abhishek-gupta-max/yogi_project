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
        'relative overflow-hidden group rounded-2xl',
        paddings[padding],
        className
      )}
      style={{
        background: 'rgba(10, 10, 20, 0.7)',
        border: glow ? '1px solid rgba(0, 87, 255, 0.35)' : '1px solid rgba(26, 32, 53, 0.8)',
        backdropFilter: 'blur(16px)',
        boxShadow: glow ? '0 0 30px rgba(0, 87, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
      {...props}
    >
      {/* Sleek Gradient Overlay inside Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      {/* Dynamic Hover Spotlight Effect */}
      {hover && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.06)_0%,transparent_60%)] pointer-events-none transition-opacity duration-700" />
      )}

      {/* Render children */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
