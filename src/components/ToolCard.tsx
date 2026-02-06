type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({ title, description, href }: Props) {
  return (
    <a
      href={href}
      className="group rounded-card border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-primary"
    >
      <h3 className="text-lg font-semibold text-ink group-hover:text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </a>
  );
}
