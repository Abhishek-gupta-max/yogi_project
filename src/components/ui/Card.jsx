export default function Card({ children, className = '', hoverEffect = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden ${
        hoverEffect ? 'hover:border-accent-primary/40 hover:bg-bg-tertiary/60' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
