# Step 1: Use the official Node.js image as a base
FROM node:14 AS build

# Step 2: Set the working directory in the container
# WORKDIR /usr/src/app
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm cache clean --force

# Step 4: Install the dependencies
RUN npm install

# COPY src/ ./src/
# COPY public/ ./public/
COPY . .

RUN echo "Hi There"

# Step 6: Build the React application
RUN npm run build

# Step 7: Use a lightweight web server to serve the build files
FROM nginx:alpine

# Step 8: Copy the build files to the Nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port the app runs on
EXPOSE 80

# Step 10: Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
