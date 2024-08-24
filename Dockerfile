FROM node:18


WORKDIR /app

COPY . /app/

COPY package*.json /app/
RUN apt update && apt install -y php-cli php-intl php-mbstring php-xml php-zip

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
