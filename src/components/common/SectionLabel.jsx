export default function SectionLabel({ eyebrow, title, light = false, className = '' }) {
  return (
    <div className={className}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? 'text-gold' : 'text-green'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl font-bold leading-tight text-balance md:text-6xl ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
