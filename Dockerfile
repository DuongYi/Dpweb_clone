FROM node:14.17.6-alpine3.13 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

FROM nginx:1.19.8-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /var/www

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]