
FROM node:latest
RUN echo "Loaded Node"
# Install dependencies
RUN pnpm install
RUN echo "pnpm installed?"

WORKDIR /app
RUN echo "WORKDIR /app"

COPY . /app/
RUN echo "COPY . /app/"

RUN corepack enable
RUN echo "corepack enable"
RUN rm -f package-lock.json
RUN echo "rm -f package-lock.json"
RUN npm ci "--production=false"
RUN echo "npm cinfig set production=false"
RUN echo "npm ci"
# Use the latest pnpm version
RUN corepack use pnpm@*
RUN echo "corepack use pnpm@*"

# Install app dependencies and generate a new package-lock.json
RUN npm install
RUN echo "npm install"
RUN npm run build
RUN echo "npm run build"

COPY package*.json /app/
RUN echo "package*.json /app/"
EXPOSE 8080
RUN echo "EXPOSE 8080"

CMD ["npm", "start"]
RUN echo "Started!"
