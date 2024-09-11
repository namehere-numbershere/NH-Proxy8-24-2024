FROM node:latest

WORKDIR /app

COPY . /app/

COPY package*.json /app/

RUN npm install
RUN npm install -g pnpm

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "start"]
