FROM node:19-alpine as site-builder
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN node ./scripts/search/prepare-index.js
RUN ./node_modules/.bin/astro build
FROM nginx:stable-alpine
COPY --from=site-builder /app/dist /usr/share/nginx/html
COPY ./docker-nginx.conf /etc/nginx/conf.d/default.conf
