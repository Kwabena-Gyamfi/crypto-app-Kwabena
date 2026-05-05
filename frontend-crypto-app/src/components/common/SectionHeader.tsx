type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0052ff]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
