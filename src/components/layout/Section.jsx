export default function Section({ id, children, className = '', background = 'primary' }) {
  const bgClasses = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary',
    tertiary: 'bg-bg-tertiary',
  };

  return (
    <section
      id={id}
      className={`py-24 relative overflow-hidden ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
