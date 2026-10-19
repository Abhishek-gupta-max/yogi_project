import { motion } from 'framer-motion';
import clsx from 'clsx';

// Variant styles live in src/styles/index.css (.btn-primary / .btn-outline)
// and Tailwind theme tokens, so buttons follow the section's light/navy theme.
const VARIANTS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  secondary: 'btn-outline bg-surface-2 border-line',
  glow: 'btn-outline text-accent border-accent/40 bg-accent/5',
};

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

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isSpinning}
      whileTap={{ scale: 0.98 }}
      className={clsx(VARIANTS[variant] || VARIANTS.primary, sizes[size], className)}
      {...props}
    >
      {isSpinning ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}

      {!isSpinning && Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}

      <span className="relative z-10">{children}</span>

      {!isSpinning && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}
    </motion.button>
  );
}
