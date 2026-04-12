FROM node:20-alpine AS base
WORKDIR /app
RUN chown node /app
RUN chmod 777 /app

FROM base AS development
COPY package.json package-lock.json tsconfig.json /app/
RUN npm install
COPY src/ /app/
CMD ["npm", "run", "dev"]

FROM base AS builder
COPY package.json package-lock.json tsconfig.json /app/
RUN npm ci
COPY src/ /app/src/
RUN npm run build
RUN find src -type f -name "*.ts" ! -name "*.d.ts" -delete


FROM base AS prod
ENV NODE_ENV=production
COPY --from=builder /app/src/ /app/src/
COPY package.json package-lock.json /app/
RUN npm ci
CMD ["npm", "run", "start"]