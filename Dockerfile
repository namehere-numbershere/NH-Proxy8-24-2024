FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
EXPOSE 3000
RUN chmod +x start.sh
CMD ["./start.sh"]
