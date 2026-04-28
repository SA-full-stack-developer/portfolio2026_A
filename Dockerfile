# ── Etapa 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build -- --configuration docker

# ── Etapa 2: Runner ─────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm ci --legacy-peer-deps --omit=dev

EXPOSE 4000

CMD ["node", "dist/portfolio2026_A/server/server.mjs"]