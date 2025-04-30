# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 3007 (match your app port)
EXPOSE 3007

# Start the app
CMD ["npm", "run", "dev"]
