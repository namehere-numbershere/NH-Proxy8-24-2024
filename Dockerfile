# Use an official PHP runtime as a parent image
FROM php:8.2-apache

# Install Node.js
RUN apt-get update && apt-get install -y \
    curl \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install
RUN npm install concurrently --save

# Copy the rest of the application files
COPY . .

# Expose ports
EXPOSE 8080
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
