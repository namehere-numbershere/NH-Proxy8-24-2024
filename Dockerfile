# Use an official PHP runtime as a parent image
FROM node:18
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install
RUN npm run build

# Copy the rest of the application files
COPY . .

# Expose ports
EXPOSE 8080
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
