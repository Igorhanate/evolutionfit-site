import type { TemplateDef } from "../types";
import Classico from "./Classico";
import MinimalBold from "./MinimalBold";
import Manuscrito from "./Manuscrito";
import StatsCompactos from "./StatsCompactos";
import Serif from "./Serif";
import Balao from "./Balao";
import Curtida from "./Curtida";
import LedRetro from "./LedRetro";
import CodigoBarras from "./CodigoBarras";
import LetrasCruzadas from "./LetrasCruzadas";
import MaquinaEscrever from "./MaquinaEscrever";
import EvolucaoGrafico from "./EvolucaoGrafico";
import Polaroid from "./Polaroid";
import TiraPhotoBooth from "./TiraPhotoBooth";
import FilmeNegativo from "./FilmeNegativo";
import JanelasRetro from "./JanelasRetro";
import QuadrosFilme from "./QuadrosFilme";
import ColagemEtiqueta from "./ColagemEtiqueta";

// Registro central de templates. Adicionar um novo = importar e incluir aqui.
export const TEMPLATES: TemplateDef[] = [
  { id: "classico", nome: "Clássico", tipo: "sticker", fotos: 0, Component: Classico },
  { id: "minimal-bold", nome: "Minimal bold", tipo: "sticker", fotos: 0, Component: MinimalBold },
  { id: "manuscrito", nome: "Manuscrito", tipo: "sticker", fotos: 0, Component: Manuscrito },
  { id: "stats-compactos", nome: "Stats compactos", tipo: "sticker", fotos: 0, Component: StatsCompactos },
  { id: "serif", nome: "Serif elegante", tipo: "sticker", fotos: 0, Component: Serif },
  { id: "balao", nome: "Balão de mensagem", tipo: "sticker", fotos: 0, Component: Balao },
  { id: "curtida", nome: "Curtida", tipo: "sticker", fotos: 0, Component: Curtida },
  { id: "led-retro", nome: "LED retrô", tipo: "sticker", fotos: 0, Component: LedRetro },
  { id: "codigo-barras", nome: "Código de barras", tipo: "sticker", fotos: 0, Component: CodigoBarras },
  { id: "letras-cruzadas", nome: "Letras cruzadas", tipo: "sticker", fotos: 0, Component: LetrasCruzadas },
  { id: "maquina-escrever", nome: "Máquina de escrever", tipo: "sticker", fotos: 0, Component: MaquinaEscrever },
  { id: "evolucao-grafico", nome: "Evolução com gráfico", tipo: "sticker", fotos: 0, Component: EvolucaoGrafico },
  { id: "polaroid", nome: "Polaroid", tipo: "montagem", fotos: 1, Component: Polaroid },
  { id: "tira-photobooth", nome: "Tira photo booth", tipo: "montagem", fotos: 3, Component: TiraPhotoBooth },
  { id: "filme-negativo", nome: "Filme / negativo", tipo: "montagem", fotos: 1, Component: FilmeNegativo },
  { id: "janelas-retro", nome: "Janelas retrô", tipo: "montagem", fotos: 2, Component: JanelasRetro },
  { id: "quadros-filme", nome: "Quadros de filme", tipo: "montagem", fotos: 3, Component: QuadrosFilme },
  { id: "colagem-etiqueta", nome: "Colagem com etiqueta", tipo: "montagem", fotos: 4, Component: ColagemEtiqueta },
];

export const TEMPLATE_PADRAO = TEMPLATES[0].id;

export function getTemplate(id: string): TemplateDef {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
