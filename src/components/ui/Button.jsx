import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  disabled = false,
  isLoading = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const isSpinning = isLoading || loading;

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2 md:px-10 md:py-4',
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #0050FF 0%, #004FE8 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#FFFFFF',
      boxShadow: '0 0 20px rgba(0, 87, 255, 0.3)',
    },
    outline: {
      background: 'transparent',
      border: '1px solid rgba(0, 87, 255, 0.5)',
      color: '#F0F6FF',
    },
    secondary: {
      background: 'rgba(13, 17, 23, 0.7)',
      border: '1px solid rgba(26, 32, 53, 0.8)',
      color: '#C8D6F0',
      backdropFilter: 'blur(12px)',
    },
    glow: {
      background: 'rgba(0, 87, 255, 0.1)',
      border: '1px solid rgba(0, 229, 255, 0.4)',
      color: '#1A75FF',
      boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
    },
  };

  const currentStyle = variantStyles[variant] || variantStyles.primary;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isSpinning}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'inline-flex items-center justify-center font-semibold rounded-xl tracking-wide transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden',
        sizes[size],
        className
      )}
      style={currentStyle}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 0 36px rgba(0, 87, 255, 0.5)';
          e.currentTarget.style.transform = 'scale(1.02)';
        } else if (variant === 'outline') {
          e.currentTarget.style.background = 'rgba(0, 87, 255, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 87, 255, 0.8)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = currentStyle.boxShadow || 'none';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.background = currentStyle.background;
        e.currentTarget.style.borderColor = '';
      }}
      {...props}
    >
      {isSpinning ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : null}

      {!isSpinning && Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}

      <span className="relative z-10">{children}</span>

      {!isSpinning && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}

      {/* Shimmer on hover for primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out" />
      )}
    </motion.button>
  );
}
