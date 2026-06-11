export default function SkillPill({ children, icon: Icon, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium ${
        light
          ? 'border-white/15 bg-white/8 text-cream'
          : 'border-line bg-white/45 text-ink shadow-[0_1px_0_rgba(17,17,17,0.03)]'
      }`}
    >
      {Icon ? <Icon className="h-3.5 w-3.5 opacity-80" strokeWidth={1.8} /> : null}
      {children}
    </span>
  );
}
