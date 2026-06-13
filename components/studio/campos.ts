import type { CampoId, Modalidade } from "./types";

export type CampoDef = {
  id: CampoId;
  label: string;
  placeholder: string;
  numeric?: boolean;
};

const C: Record<CampoId, CampoDef> = {
  nomeTreino: { id: "nomeTreino", label: "Nome do treino", placeholder: "Treino A" },
  tempo: { id: "tempo", label: "Tempo", placeholder: "45 min" },
  calorias: { id: "calorias", label: "Calorias", placeholder: "420", numeric: true },
  kgLevantados: { id: "kgLevantados", label: "Kg levantados", placeholder: "3.250", numeric: true },
  percentEvolucao: { id: "percentEvolucao", label: "% de evolução", placeholder: "14", numeric: true },
  rm: { id: "rm", label: "1RM máx", placeholder: "180 kg" },
  repeticoes: { id: "repeticoes", label: "Nº de repetições", placeholder: "120", numeric: true },
  prs: { id: "prs", label: "PRs batidos", placeholder: "2", numeric: true },
  distancia: { id: "distancia", label: "Distância", placeholder: "5,3 km" },
  ritmo: { id: "ritmo", label: "Ritmo", placeholder: "05:30 /km" },
  nomeWod: { id: "nomeWod", label: "Nome do WOD", placeholder: "Fran" },
  data: { id: "data", label: "Data", placeholder: "" },
  hora: { id: "hora", label: "Hora", placeholder: "" },
};

// Campos específicos por modalidade (data/hora entram sempre, tratados à parte).
export const CAMPOS_POR_MODALIDADE: Record<Modalidade, CampoDef[]> = {
  musculacao: [C.nomeTreino, C.tempo, C.calorias, C.kgLevantados, C.percentEvolucao, C.rm, C.repeticoes, C.prs],
  corrida: [C.distancia, C.ritmo, C.tempo, C.calorias],
  ciclismo: [C.distancia, C.ritmo, C.tempo, C.calorias],
  crossfit: [C.nomeWod, C.tempo, C.calorias, C.prs],
  yoga: [C.tempo, C.calorias],
};

// Valor "primário" de cada modalidade — usado por templates de métrica gigante.
export const CAMPO_PRIMARIO: Record<Modalidade, CampoId> = {
  musculacao: "kgLevantados",
  corrida: "distancia",
  ciclismo: "distancia",
  crossfit: "nomeWod",
  yoga: "tempo",
};

// Exemplos por campo — preenchem o preview quando o usuário não digitou nada.
export const EXEMPLOS: Record<CampoId, string> = {
  nomeTreino: "Treino A",
  tempo: "45 min",
  calorias: "420",
  kgLevantados: "3.250 kg",
  percentEvolucao: "14",
  rm: "180 kg",
  repeticoes: "120",
  prs: "2",
  distancia: "5,3 km",
  ritmo: "05:30 /km",
  nomeWod: "Fran",
  data: "12 JUN 2026",
  hora: "19:52",
};

export const MODALIDADES: { id: Modalidade; nome: string; icone: string }[] = [
  { id: "musculacao", nome: "Musculação", icone: "Dumbbell" },
  { id: "corrida", nome: "Corrida", icone: "Footprints" },
  { id: "crossfit", nome: "Crossfit", icone: "Flame" },
  { id: "ciclismo", nome: "Ciclismo", icone: "Bike" },
  { id: "yoga", nome: "Yoga", icone: "Flower2" },
];
