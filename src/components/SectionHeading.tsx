interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {tag && (
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
          {tag}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brown">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-gray-body text-lg leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
