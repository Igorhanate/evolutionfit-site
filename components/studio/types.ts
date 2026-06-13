// Tipos centrais do Studio de Métricas.

export type Modalidade =
  | "musculacao"
  | "corrida"
  | "crossfit"
  | "ciclismo"
  | "yoga";

export type CampoId =
  | "nomeTreino"
  | "tempo"
  | "calorias"
  | "kgLevantados"
  | "percentEvolucao"
  | "rm"
  | "repeticoes"
  | "prs"
  | "distancia"
  | "ritmo"
  | "nomeWod"
  | "data"
  | "hora";

export type Metricas = Partial<Record<CampoId, string>>;

export type TemplateTipo = "sticker" | "montagem";

// Props que TODO template recebe. `valor()` já resolve "valor do usuário ou
// exemplo", então o template nunca aparece vazio no preview.
export type TemplateProps = {
  modalidade: Modalidade;
  metricas: Metricas;
  fotos: string[]; // object URLs (montagens). Stickers ignoram.
  valor: (campo: CampoId) => string;
  temValor: (campo: CampoId) => boolean;
};

export type TemplateDef = {
  id: string;
  nome: string;
  tipo: TemplateTipo;
  fotos: number; // quantas fotos a montagem usa (0 = sticker)
  Component: React.ComponentType<TemplateProps>;
};

// Dimensões reais do PNG exportado (stories 9:16).
export const STAGE_W = 1080;
export const STAGE_H = 1920;
