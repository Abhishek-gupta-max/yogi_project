import { motion } from 'framer-motion';

export default function Loader({ size = 'medium', fullPage = false }) {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-20 h-20 border-8'
  };

  const containerClasses = fullPage
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-page'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Track */}
        <div className={`${sizeClasses[size]} border-line rounded-full`} />
        {/* Spinner */}
        <motion.div
          className={`${sizeClasses[size]} border-brand border-t-transparent rounded-full absolute top-0 left-0`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
}
