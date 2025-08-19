FROM node:23.11.0-alpine3.21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --prefer-offline
COPY . .
RUN npm run build

FROM nginx:1.27.4-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
USER nginx
