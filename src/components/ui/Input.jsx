export default function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  error = '',
  register = {},
  className = '',
  textarea = false,
  rows = 4,
  ...props
}) {
  const inputBaseClasses = 'w-full bg-bg-secondary border border-border-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold tracking-wide text-text-secondary">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          className={`${inputBaseClasses} resize-none`}
          {...register}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={inputBaseClasses}
          {...register}
          {...props}
        />
      )}

      {error && (
        <span className="text-xs text-error font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
