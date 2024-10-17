# Use the official Node.js image as a base
FROM node:14-alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Stage 2: Production
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app ./

# Remove dev dependencies to keep the image clean
RUN npm prune --production

# Expose the port
EXPOSE 5000

# Command to run the application
CMD ["node", "index.js"]
# Expose the port
EXPOSE 5000

# Command to run the application
CMD ["node", "index.js"]
