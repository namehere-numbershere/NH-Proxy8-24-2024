FROM node:18
FROM php:8.2-apache


WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install concurrently --save
COPY . .

RUN npm run build

EXPOSE 8080
EXPOSE 3000

CMD ["npm", "start"]
