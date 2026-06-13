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
    "inline-block rounded-xl px-7 py-3.5 font-display font-bold text-base tracking-wide transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-evo text-white shadow-lg shadow-evo/25 hover:bg-evo-dark hover:shadow-xl hover:-translate-y-0.5"
      : "border-2 border-evo text-evo hover:bg-evo-light hover:-translate-y-0.5";
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
