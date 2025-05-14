<<<<<<< HEAD
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
=======
# solana-com

Projeto baseado em Next.js voltado pra interface do ecossistema Solana. Integra carteira, transações
e estatísticas em tempo real com RPCs direto da blockchain.

## Rodando Localmente

```bash
npm install
npm run dev
```

Acesse em http://localhost:3000

## 📁 Estrutura do Código

```bash
src/
├── assets/            # Imagens e ícones de wallets
├── components/        # Componentes React soltos
├── data/              # Dados de wallets e filtros
├── hooks/             # Hooks custom tipo useTransactionStats
├── pages/             # Páginas Next.js (com suporte a locale)
├── utils/             # RPC utils e helpers
```

## ⚙️ Configuração

Crie um arquivo `.env.local` com:

```bash
NEXT_PUBLIC_RPC_ENDPOINT=https://api.mainnet-beta.solana.com
```

## 🛠 Scripts Úteis

```bash
npm run dev      # Sobe local
npm run build    # Build de produção
npm run start    # Serve build pronto
```

## ☠️ Aviso

Esse projeto é sensível a falhas de RPC, erros silenciosos e dependências dinâmicas com cache zoado.
Se der ruim, limpe tudo:

```bash
rm -rf node_modules .next
npm cache clean --force
npm install
npm run dev
```

> "Código bom é o que não te faz odiar a própria existência. Por enquanto esse aqui passa raspando."
>>>>>>> origin/main
