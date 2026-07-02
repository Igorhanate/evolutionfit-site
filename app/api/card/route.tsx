import { ImageResponse } from "next/og";

export const runtime = "edge";

type CampoId =
  | "nomeTreino" | "tempo" | "calorias" | "kgLevantados" | "percentEvolucao"
  | "rm" | "repeticoes" | "prs" | "distancia" | "ritmo" | "nomeWod";
type Modalidade = "musculacao" | "corrida" | "crossfit" | "ciclismo" | "yoga";

const LABELS: Record<CampoId, string> = {
  nomeTreino: "Nome do treino", tempo: "Tempo", calorias: "Calorias",
  kgLevantados: "Kg levantados", percentEvolucao: "% de evolução", rm: "1RM máx",
  repeticoes: "Nº de repetições", prs: "PRs batidos", distancia: "Distância",
  ritmo: "Ritmo", nomeWod: "Nome do WOD",
};

const CAMPOS_POR_MODALIDADE: Record<Modalidade, CampoId[]> = {
  musculacao: ["nomeTreino", "tempo", "calorias", "kgLevantados", "percentEvolucao", "rm", "repeticoes", "prs"],
  corrida: ["distancia", "ritmo", "tempo", "calorias"],
  ciclismo: ["distancia", "ritmo", "tempo", "calorias"],
  crossfit: ["nomeWod", "tempo", "calorias", "prs"],
  yoga: ["tempo", "calorias"],
};

const EXEMPLOS: Record<CampoId, string> = {
  nomeTreino: "Treino A", tempo: "45 min", calorias: "420", kgLevantados: "3.250 kg",
  percentEvolucao: "14", rm: "180 kg", repeticoes: "120", prs: "2",
  distancia: "5,3 km", ritmo: "05:30 /km", nomeWod: "Fran",
};

function soNumero(v: string) { return v.replace(/[^\d.,-]/g, "").trim(); }
function fmtPercent(v: string) { const n = soNumero(v); return n ? `+${n}%` : v; }

const INK = "#111111";
const INK75 = "rgba(17,17,17,0.75)";
const SHADOW = "0 2px 16px rgba(255,255,255,0.5)";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);

  const poppins800 = await fetch(new URL("./Poppins-ExtraBold.ttf", import.meta.url)).then((r) => r.arrayBuffer());
  const poppins700 = await fetch(new URL("./Poppins-Bold.ttf", import.meta.url)).then((r) => r.arrayBuffer());

  if (searchParams.get("template") === "evolucao") {
    const pontosRaw = (searchParams.get("pontos") || "")
      .split(",")
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n));
    const pontos = pontosRaw.length >= 2 ? pontosRaw : [322, 341, 371, 405];
    const titulo = searchParams.get("nomeTreino") || "Evolução";
    const pctRaw = soNumero(searchParams.get("percentEvolucao") || "0");
    const pctTxt = pctRaw.startsWith("-") ? `${pctRaw}%` : `+${pctRaw}%`;
    const rm = searchParams.get("rm") || "";

    const X0 = 20, X1 = 580, Y0 = 230, Y1 = 30;
    const minP = Math.min(...pontos);
    const maxP = Math.max(...pontos);
    const range = maxP - minP || 1;
    const coords = pontos.map((v, i) => ({
      x: X0 + (i * (X1 - X0)) / (pontos.length - 1),
      y: Y0 - ((v - minP) / range) * (Y0 - Y1),
    }));
    const path = coords
      .map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`)
      .join(" ");

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%", height: "100%", display: "flex", alignItems: "center",
            justifyContent: "center", padding: "0 48px", fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              width: 860, display: "flex", flexDirection: "column", alignItems: "center",
              gap: 32, borderRadius: 40, backgroundColor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(17,17,17,0.1)", padding: 64, textAlign: "center",
            }}
          >
            <div style={{ display: "flex", fontSize: 60, fontWeight: 800, color: INK }}>
              {titulo}
            </div>
            <div style={{ display: "flex", fontSize: 52, fontWeight: 800, color: "#1f9a49" }}>
              {pctTxt} de evolução
            </div>
            {rm ? (
              <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "rgba(17,17,17,0.7)" }}>
                1RM máx {rm}
              </div>
            ) : null}
            <svg viewBox="0 0 600 260" width={600} height={260} style={{ marginTop: 16 }}>
              <line x1="0" y1="20" x2="600" y2="20" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
              <line x1="0" y1="80" x2="600" y2="80" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
              <line x1="0" y1="140" x2="600" y2="140" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
              <line x1="0" y1="200" x2="600" y2="200" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
              <path d={path} fill="none" stroke="#1b7a3d" strokeWidth="6" strokeLinecap="round" />
              {coords.map((c, i) => (
                <circle key={i} cx={c.x.toFixed(1)} cy={c.y.toFixed(1)} r="9" fill="#1b7a3d" />
              ))}
            </svg>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${origin}/logos/logo-wordmark.png`} width={240} alt="" style={{ marginTop: 8 }} />
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1920,
        fonts: [
          { name: "Poppins", data: poppins700, weight: 700, style: "normal" },
          { name: "Poppins", data: poppins800, weight: 800, style: "normal" },
        ],
      }
    );
  }

  const modParam = (searchParams.get("modalidade") || "musculacao") as Modalidade;
  const modalidade: Modalidade = CAMPOS_POR_MODALIDADE[modParam] ? modParam : "musculacao";
  const campos = CAMPOS_POR_MODALIDADE[modalidade];

  const temValor = (id: CampoId) => {
    const v = searchParams.get(id);
    return v !== null && v.trim() !== "";
  };
  const valor = (id: CampoId) => {
    const v = searchParams.get(id);
    return v !== null && v.trim() !== "" ? v : (EXEMPLOS[id] ?? "");
  };

  const nomeId: CampoId | null = temValor("nomeTreino") ? "nomeTreino" : temValor("nomeWod") ? "nomeWod" : null;
  const metricaCampos = campos.filter((c) => c !== "nomeTreino" && c !== "nomeWod");
  const preenchidos = metricaCampos.filter(temValor);
  const exibir = preenchidos.length ? preenchidos : metricaCampos.slice(0, 4);
  const mostra = (id: CampoId) => (id === "percentEvolucao" ? fmtPercent(valor(id)) : valor(id));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 80, padding: "0 96px",
          textAlign: "center", fontFamily: "Poppins",
        }}
      >
        {nomeId && (
          <div style={{ display: "flex", fontSize: 68, fontWeight: 800, color: INK, textShadow: SHADOW }}>
            “{valor(nomeId)}”
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center", rowGap: 64 }}>
          {exibir.map((c) => (
            <div key={c} style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 32, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: INK75, textShadow: SHADOW }}>
                {LABELS[c]}
              </span>
              <span style={{ fontSize: 62, fontWeight: 800, color: INK, textShadow: SHADOW }}>
                {mostra(c)}
              </span>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${origin}/logos/logo-wordmark.png`} width={440} alt="" style={{ marginTop: 16 }} />
      </div>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [
        { name: "Poppins", data: poppins700, weight: 700, style: "normal" },
        { name: "Poppins", data: poppins800, weight: 800, style: "normal" },
      ],
    }
  );
}
