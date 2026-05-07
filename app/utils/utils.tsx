type SectionTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTag({
  children,
  className = "",
}: SectionTagProps) {
  return (
    <p className={`text-xs font-bold tracking-[0.18em] uppercase text-[#4291CE] mb-2 ${className}`}>
      {children}
    </p>
  );
}