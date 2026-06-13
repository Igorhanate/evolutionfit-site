export const HERO = {
  titulo: "A primeira IA de gestão fitness",
  subtitulo: "Tudo baseado no seu tempo e orçamento",
  cta: "VER PLANOS",
  bandTitulo: "Tudo que você precisa direto no WhatsApp",
  bandLabels: ["Para todas as idades", "Todos os lugares", "Todas modalidades"],
};

// Cards de ilustração logo abaixo do hero.
export const CARDS_TOPO = ["card-idosos.png", "card-yoga.png", "card-corredor.png"];

// Cards de recurso com barra preta + seta (6).
export const FEATURES_CARDS = [
  { img: "feat-corporal.png", label: "Avaliação corporal" },
  { img: "feat-refeicoes.png", label: "Análise de refeições" },
  { img: "feat-garmin.png", label: "Conexão com Garmin" },
  { img: "feat-compartilhe.png", label: "Compartilhe sua evolução" },
  { img: "feat-suplementos.png", label: "Lembrete de suplementos e remédios" },
  { img: "feat-calorias.png", label: "Gaste mais calorias" },
] as const;

// Fotos reais (prova social).
export const FOTOS_REAIS = ["foto1.png", "foto2.png", "foto3.png", "foto4.png"];

export const VIP = {
  titulo: "Participe do plano VIP",
  selo: "Liberamos apenas 50 vagas de pré-venda",
  cta: "Assinar",
};

export const FECHAMENTO = {
  titulo: "Nos vemos lá!",
  preco: "Valor promocional de R$ 9,99/mês.",
  sub: "Sem baixar app. Disponível 24h. Cancele quando quiser.",
  cta: "Quero assinar",
};

export const FEATURES = [
  { icone: "Dumbbell", titulo: "Treinos personalizados ilimitados", texto: "Planos sob medida para seu tempo, local e objetivo — em qualquer modalidade." },
  { icone: "Camera", titulo: "Análise de refeições por foto", texto: "Fotografe o prato e a IA calcula calorias e nutrientes em segundos." },
  { icone: "ScanLine", titulo: "Avaliação corporal por fotos", texto: "Composição corporal estimada a partir de fotos, sem equipamento." },
  { icone: "ListChecks", titulo: "Contadores de hábitos", texto: "Água, suplementos, álcool e cigarro — acompanhe seus streaks." },
  { icone: "Watch", titulo: "Conexão com Garmin", texto: "Treinos de corrida sincronizam e ajustam seu gasto calórico." },
  { icone: "Pill", titulo: "Lembrete de suplementos e remédios", texto: "O Evo lembra você nos horários certos." },
  { icone: "Share2", titulo: "Card de evolução para Instagram", texto: "Compartilhe seu progresso com cards prontos para os stories." },
  { icone: "MessageCircle", titulo: "Disponível 24h no WhatsApp", texto: "Sem baixar app. Seu personal e nutricionista no seu bolso." },
] as const;

export const FUROU_DIETA = {
  titulo: "Furou a dieta?",
  destaque: "Com a Evolution isso não é problema.",
  texto:
    "Envie uma foto da sua refeição e encaixamos automaticamente as calorias e nutrientes no seu dia.",
  tagline: "“A dieta perfeita é aquela que funciona no seu dia a dia.”",
};

export const EVOLUCAO = {
  titulo: "Acompanhe sua evolução",
  destaque: "+47% de resultados",
  texto:
    "Quem acompanha treino, dieta e medidas evolui mais. O Evo registra tudo por você e mostra seu progresso semana a semana.",
  semanas: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
};

export const DEPOIMENTOS = [
  { nome: "Thiago Albuquerque", texto: "O melhor de tudo é a praticidade: dá para comer comida do dia a dia, sem complicação e sem pesar no bolso. Adorei!" },
  { nome: "Beatriz Fontes", texto: "Já perdi 5kg durante duas semanas, treinando em casa e seguindo o cardápio." },
  { nome: "Bruno Henrique", texto: "Os treinos sempre se adaptam exatamente ao tempo que tenho disponível." },
  { nome: "Amanda Fontes", texto: "Treino para meias maratonas e a maior dificuldade era alinhar os treinos de força com a corrida. O Evo resolveu." },
  { nome: "Tereza Medeiros", texto: "Minha neta que me indicou. Os exercícios respeitam minhas limitações. Achei maravilhoso!" },
  { nome: "Larissa Barbosa", texto: "Superou minhas expectativas pela praticidade. A dieta cabe no bolso e no dia a dia, e os treinos são ótimos. Muito satisfeita!" },
  { nome: "Felipe Cavalcanti", texto: "Ele faz uma divisão perfeita de volume por grupo muscular e me ajuda a controlar a progressão de cargas." },
  { nome: "Juliana Santos W.", texto: "Eu odiava ter que ficar pesando e digitando cada ingrediente. Essa leitura de prato por inteligência artificial mudou o jogo. Só fotografo o prato e tudo se resolve em segundos." },
  { nome: "Letícia Almeida", texto: "Amei os treinos de força! O Evo organiza as séries e o tempo de descanso. Senti uma evolução nítida." },
  { nome: "Rafael Rodrigues", texto: "Muito prático e direto ao ponto. Sem passar horas na cozinha fazendo pratos caros e sem desculpa para não treinar." },
  { nome: "Marcos Vinícius", texto: "Sensacional a integração com o Garmin! Meus treinos de corrida sincronizam na hora e já calculam o gasto calórico exato para ajustar a minha janta." },
  { nome: "Gabriela Martins R.", texto: "Amei o formato! Consigo conciliar perfeitamente com o trabalho. Alimentação básica e nutritiva sem frescura, e os treinos entram certinho na minha rotina." },
] as const;

export const BENEFICIOS_VIP = [
  "Treinos personalizados ilimitados",
  "Contadores de hábitos",
  "Análise de composição corporal por fotos",
  "Card de evolução para Instagram",
  "Disponível 24h no WhatsApp",
  "Brindes para clientes VIP",
] as const;

export const PLANOS = {
  aviso: "Sem baixar app. Disponível 24h. Cancele quando quiser.",
  vip: {
    nome: "Plano VIP — Pré-venda",
    preco: "R$ 9,99",
    sufixo: "/mês",
    selo: "LIBERAMOS APENAS 50 VAGAS DE PRÉ-VENDA",
    cta: "QUERO ASSINAR",
  },
  trimestral: { nome: "Trimestral", preco: "R$ 29,99", sufixo: "/mês", cta: "Assinar Trimestral" },
  anual: { nome: "Anual", preco: "R$ 19,99", sufixo: "/mês", cta: "Assinar Anual" },
};

export const FOOTER = {
  fechamento: "Nos vemos lá!",
  suporte: "suporte em breve", // TBD: e-mail de suporte (Igor vai criar)
};
