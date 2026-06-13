import type { TemplateDef } from "../types";
import Classico from "./Classico";
import MinimalBold from "./MinimalBold";

// Registro central de templates. Adicionar um novo = importar e incluir aqui.
export const TEMPLATES: TemplateDef[] = [
  { id: "classico", nome: "Clássico", tipo: "sticker", fotos: 0, Component: Classico },
  { id: "minimal-bold", nome: "Minimal bold", tipo: "sticker", fotos: 0, Component: MinimalBold },
];

export const TEMPLATE_PADRAO = TEMPLATES[0].id;

export function getTemplate(id: string): TemplateDef {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
