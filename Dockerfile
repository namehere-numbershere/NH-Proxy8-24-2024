FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install
RUN npm audit fix
COPY . .

RUN npm run build

EXPOSE 8080
EXPOSE 3000

CMD ["/bin/sh", "-c", "node server.js && npm start"]
