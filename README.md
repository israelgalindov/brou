# brou

Landing page de **brou** — agendamiento automatizado por WhatsApp con IA para negocios que valoran su tiempo.

El agente conversa con tus clientes, agenda citas, cobra anticipos y envía recordatorios 24/7, sin que tus clientes necesiten instalar otra app.

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) / componentes estilo shadcn
- Despliegue en [Cloudflare Workers](https://developers.cloudflare.com/workers/) (Wrangler)

## Requisitos

- Node.js 20+
- npm, pnpm, bun o yarn

## Desarrollo local

```bash
git clone https://github.com/israelgalindov/brou.git
cd brou
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Servidor de desarrollo               |
| `npm run build`| Build de producción                  |
| `npm run preview` | Vista previa del build            |
| `npm run lint` | ESLint                               |
| `npm run format` | Prettier sobre el proyecto         |

## Estructura del proyecto

```
src/
├── routes/          # Rutas (file-based routing)
│   ├── __root.tsx   # Layout raíz
│   └── index.tsx    # Landing page
├── components/ui/   # Componentes UI reutilizables
├── hooks/           # React hooks
├── lib/             # Utilidades y helpers
├── server.ts        # Entry SSR (Cloudflare)
└── styles.css       # Estilos globales + Tailwind
```

## Despliegue en Cloudflare

1. Instala [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) si aún no lo tienes.
2. Genera el build:

   ```bash
   npm run build
   ```

3. Despliega con Wrangler (ajusta el nombre del proyecto en `wrangler.jsonc` si lo necesitas):

   ```bash
   npx wrangler deploy
   ```

Para variables de entorno locales, crea un archivo `.dev.vars` en la raíz (no se sube al repositorio).

## Licencia

Proyecto privado. Todos los derechos reservados.
