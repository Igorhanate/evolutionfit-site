// Helpers de formatação usados pelos templates.

export function soNumero(v: string): string {
  return v.replace(/[^\d.,-]/g, "").trim();
}

// "14" -> "+14%"; já vindo formatado, mantém.
export function fmtPercent(v: string): string {
  const n = soNumero(v);
  if (!n) return v;
  return `+${n}%`;
}
