
FROM node:latest

# Install dependencies
RUN pnpm install
WORKDIR /app

COPY . /app/

RUN corepack enable

RUN npm config set production=false
RUN npm ci

# Use the latest pnpm version
RUN corepack use pnpm@*
RUN rm -f package-lock.json

# Install app dependencies and generate a new package-lock.json
RUN npm install
RUN npm run build

COPY package*.json /app/
EXPOSE 8080

CMD ["npm", "start"]
