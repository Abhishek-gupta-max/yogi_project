// Brand badge from /public/logo-mark.png (cut from the official round logo; full size at /logo.png)
export default function Logo({ className = '', iconOnly = false }) {
  return (
    <div className={`flex items-center gap-3 font-display text-fg tracking-tight ${className}`}>
      <img
        src="/logo-mark.png"
        alt={iconOnly ? 'VeltrixSecure Technologies' : ''}
        width="44"
        height="44"
        className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 rounded-full"
      />
      {!iconOnly && (
        <span className="font-bold text-xl md:text-2xl">
          Veltrix<span className="text-accent">Secure</span>
        </span>
      )}
    </div>
  );
}
