export default function Badge({ children, className = '', variant = 'primary' }) {
  const variants = {
    primary: 'bg-accent-primary/10 text-accent-primary border-accent-primary/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
