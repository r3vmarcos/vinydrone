# Viny Drone Landing Page

Landing page One-Page de alto impacto para o profissional de filmagem aérea **Viny Drone**.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Como rodar

```bash
npm install
npm run dev
```

A aplicação sobe por padrão em:

```txt
http://localhost:5174
```

## Comandos úteis

```bash
npm run build
npm run preview
```

## Personalização rápida

Edite `src/data/siteData.ts` para trocar:

- WhatsApp da empresa: `WHATSAPP_NUMBER`
- Vídeo do logo e hero: `videoSources`
- Serviços
- Galeria
- Diferenciais
- Especificações do drone

## Observações

- O número de WhatsApp está como placeholder: `5511999999999`.
- As mídias usam URLs públicas de exemplo. Para produção, mova vídeos e imagens para `src/assets` ou CDN próprio.
- A galeria usa hover preview para vídeos e modal expansível ao clicar.
