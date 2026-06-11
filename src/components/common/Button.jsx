import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-ink text-cream hover:-translate-y-0.5 hover:bg-green-deep hover:shadow-soft',
  gold: 'bg-gold text-ink hover:-translate-y-0.5 hover:bg-orange hover:text-white',
  outline:
    'border border-line bg-cream/60 text-ink hover:-translate-y-0.5 hover:border-green hover:bg-white',
  ghost: 'text-cream hover:text-gold',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon = ArrowRight,
  className = '',
  ...props
}) {
  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" strokeWidth={2.2} /> : null}
    </Comp>
  );
}
