FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm build

EXPOSE 8080
EXPOSE 3000

CMD ["/bin/sh", "-c", "node server.js && npm start"]
