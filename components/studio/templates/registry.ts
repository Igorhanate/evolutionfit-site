import type { TemplateDef } from "../types";
import Classico from "./Classico";
import MinimalBold from "./MinimalBold";
import Manuscrito from "./Manuscrito";
import StatsCompactos from "./StatsCompactos";
import Serif from "./Serif";
import Balao from "./Balao";
import Curtida from "./Curtida";

// Registro central de templates. Adicionar um novo = importar e incluir aqui.
export const TEMPLATES: TemplateDef[] = [
  { id: "classico", nome: "Clássico", tipo: "sticker", fotos: 0, Component: Classico },
  { id: "minimal-bold", nome: "Minimal bold", tipo: "sticker", fotos: 0, Component: MinimalBold },
  { id: "manuscrito", nome: "Manuscrito", tipo: "sticker", fotos: 0, Component: Manuscrito },
  { id: "stats-compactos", nome: "Stats compactos", tipo: "sticker", fotos: 0, Component: StatsCompactos },
  { id: "serif", nome: "Serif elegante", tipo: "sticker", fotos: 0, Component: Serif },
  { id: "balao", nome: "Balão de mensagem", tipo: "sticker", fotos: 0, Component: Balao },
  { id: "curtida", nome: "Curtida", tipo: "sticker", fotos: 0, Component: Curtida },
];

export const TEMPLATE_PADRAO = TEMPLATES[0].id;

export function getTemplate(id: string): TemplateDef {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
