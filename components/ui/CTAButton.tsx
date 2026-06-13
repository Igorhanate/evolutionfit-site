import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-block rounded-full border-2 px-9 py-3.5 font-display text-base font-extrabold uppercase tracking-wide transition-all duration-200";
  const styles =
    variant === "primary"
      ? "border-ink bg-evo text-white shadow-md hover:bg-evo-dark hover:-translate-y-0.5"
      : "border-ink bg-white text-ink hover:bg-evo-light hover:-translate-y-0.5";
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
