export default function Logo({ className = '', iconOnly = false }) {
  return (
    <div className={`flex items-center gap-2.5 font-display text-white tracking-tight ${className}`}>
      <svg className="w-[34px] h-[38px] flex-shrink-0" viewBox="0 0 80 92" fill="none">
        <path d="M6 8 L74 8 L74 60 Q74 86 40 92 Q6 86 6 60 Z" fill="#15498A" />
        <path d="M6 8 L40 8 L40 92 Q6 86 6 60 Z" fill="#0D2847" />
        <line x1="22" y1="30" x2="54" y2="58" stroke="#00D4FF" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="54" y1="30" x2="22" y2="58" stroke="#00D4FF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="22" cy="30" r="4.5" fill="#7FE9FF" />
        <circle cx="54" cy="30" r="4.5" fill="#7FE9FF" />
        <circle cx="22" cy="58" r="4.5" fill="#7FE9FF" />
        <circle cx="54" cy="58" r="4.5" fill="#7FE9FF" />
        <circle cx="38" cy="44" r="5" fill="#fff" />
        <line x1="38" y1="44" x2="38" y2="74" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="38" cy="78" r="4" fill="#7FE9FF" />
      </svg>
      {!iconOnly && (
        <span className="font-bold text-xl md:text-2xl">
          Veltrix<span className="text-neon-cyan">Secure</span>
        </span>
      )}
    </div>
  );
}
