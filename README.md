# Evolution Fit AI — Site

Site institucional (landing de vendas) + **Studio de Métricas** (gerador de cards
para stories) da Evolution Fit AI.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion (`motion`) · html-to-image.
- **Rotas:** `/` (landing) e `/studio` (gerador de cards).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Studio de Métricas

Gera PNGs 1080×1920 (9:16) **no navegador** — nenhuma foto é enviada a servidor.

- **12 stickers** com fundo transparente (para colar sobre a foto nos stories).
- **6 montagens** com upload de foto (polaroid, tira photo booth, filme, janelas
  retrô, quadros de filme, colagem). As fotos são reduzidas para ≤1280px no
  upload, mantendo o export rápido.
- Adicionar um template novo: criar o componente em
  `components/studio/templates/` e registrá-lo em
  `components/studio/templates/registry.ts`.

## Links de checkout

Centralizados em `config/links.ts`. Hoje todos apontam para a pré-venda Kiwify.
Quando os planos Trimestral/Anual tiverem checkout próprio, trocar **só ali**.

## Deploy (Vercel)

1. Subir o repositório para o GitHub.
2. Em vercel.com → **Add New → Project** → importar o repositório.
3. Framework detectado automaticamente (Next.js) → **Deploy**.
4. Em **Settings → Environment Variables**, definir `NEXT_PUBLIC_SITE_URL` com a
   URL final (a `*.vercel.app` gerada, ou o domínio próprio) — isso faz o
   preview de compartilhamento (Open Graph) apontar para a imagem certa.

Cada `git push` na branch principal dispara um novo deploy automático.
