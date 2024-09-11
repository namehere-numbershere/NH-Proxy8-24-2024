
FROM node:20
RUN corepack enable

# Use the latest pnpm version
RUN corepack use pnpm@*

# Install dependencies
RUN pnpm install
WORKDIR /app

COPY . /app/

COPY package*.json /app/
RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
