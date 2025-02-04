# Step 1: Build the React app using Vite
FROM node:20 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built React files from the build stage
COPY --from=build /app/dist .

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


