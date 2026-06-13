# Onde paramos — site Evolution Fit

> Aponte o Claude Code para este arquivo no início de cada sessão: ele se situa na hora.

## O que é
- Site da Evolution Fit AI: **landing** (`/`) refeita igual ao Canva + **Studio de Métricas** (`/studio`, gerador de cards PNG).
- Stack: Next.js 16, Tailwind v4, Framer Motion, html-to-image.
- Pasta do projeto: `C:\Users\Igor Hanate\Desktop\evolutionfit-site`
- No ar: https://evolutionfit-site.vercel.app  · Repo: https://github.com/Igorhanate/evolutionfit-site
- Deploy: `git push` na branch `master` → a Vercel publica sozinha em ~1-2 min.

## Como rodar / publicar
- Ver local: `npm run dev` → http://localhost:3000
- Build de teste: `npm run build`
- Publicar: `git add -A && git commit -m "..." && git push`

## Estrutura
- Landing: `app/page.tsx` + `components/landing/*` (Hero, CardsTopo, PlanoVip, Depoimentos, FuroDieta, FeaturesCards, Evolucao, AvaliacoesClientes, NosVemosLa, Footer)
- Studio: `components/studio/*` (templates em `templates/`, registrados em `templates/registry.ts`)
- Textos: `config/content.ts` · Links de checkout: `config/links.ts`
- Imagens do Canva: `public/canva/`
- Identidade: fonte títulos = Anton (`.font-anton`), verde `#1f9a49`, em `app/globals.css`

## Pendências / próximos ajustes (Igor disse "quase lá, depois ajustamos")
- [ ] Ajustes finos de cor/tamanho/espaçamento na landing (afinar com o Igor).
- [ ] (Opcional) Contorno/3D no título do hero, como no Canva — hoje está preto sólido.
- [ ] Trocar links de Trimestral/Anual em `config/links.ts` quando tiverem checkout próprio
      (hoje TODOS os botões apontam para a pré-venda Kiwify `88Bfhea`).
- [ ] E-mail de suporte (footer mostra "suporte em breve").
- [ ] Domínio próprio: ao plugar na Vercel, definir `NEXT_PUBLIC_SITE_URL` nas env vars.

## Concluído
- Landing fiel ao Canva (Anton, fundo branco, verde vivo, botões pílula, 6 cards com barra preta,
  gráfico em painel preto, depoimentos verdes + fotos reais, "NOS VEMOS LÁ!" gigante).
- Studio: 12 stickers + 6 montagens, download PNG 1080x1920 transparente validado.
