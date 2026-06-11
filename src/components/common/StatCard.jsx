export default function StatCard({ icon: Icon, value, label, highlighted = false, light = false }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlighted
          ? 'border-gold bg-gold text-ink'
          : light
            ? 'border-line bg-cream text-ink'
          : 'border-white/15 bg-white/8 text-cream backdrop-blur'
      }`}
    >
      {Icon ? <Icon className="mb-4 h-4 w-4" /> : null}
      <strong className="block font-serif text-3xl leading-none">{value}</strong>
      <span className="mt-1.5 block text-xs opacity-80">{label}</span>
    </div>
  );
}
