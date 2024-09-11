
FROM node:latest
RUN corepack enable
RUN npm install
RUN npm config set production=false
RUN npm ci

# Use the latest pnpm version
RUN corepack use pnpm@*

# Install dependencies
RUN pnpm install
WORKDIR /app

COPY . /app/

COPY package*.json /app/


RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
