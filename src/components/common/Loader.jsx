import { motion } from 'framer-motion';

export default function Loader({ size = 'medium', fullPage = false }) {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-20 h-20 border-8'
  };

  const containerClasses = fullPage 
    ? 'fixed inset-0 z-50 flex items-center justify-center'
    : 'flex items-center justify-center p-8';

  const containerStyle = fullPage ? { background: '#0A0A14' } : {};

  return (
    <div className={containerClasses} style={containerStyle}>
      <div className="relative">
        {/* Animated Background Ring */}
        <motion.div
          className={`${sizeClasses[size]} border-navy-slate rounded-full`}
          style={{ borderTopColor: 'transparent' }}
        />
        {/* Animated Inner Tech Ring */}
        <motion.div
          className={`${sizeClasses[size]} rounded-full absolute top-0 left-0`}
          style={{ borderColor: '#0050FF', borderTopColor: 'transparent' }}
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
