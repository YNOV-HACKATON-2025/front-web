# Étape 1 : Build
ARG NODE_VERSION=node:22-alpine
FROM ${NODE_VERSION} AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : Serveur web (nginx)
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Suppression du fichier de configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Ajout d'une configuration optimisée
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
