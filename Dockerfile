# Step 1: Build the React app using Vite
FROM node:20 AS build

WORKDIR /app

# Copy package.json and lock file first to cache dependencies
COPY package.json package-lock.json ./

# Install dependencies (avoid unnecessary global installs)
RUN npm install --frozen-lockfile

# Copy the source code AFTER installing dependencies (to optimize layer caching)
COPY . .

# Ensure the environment is set for production
ENV NODE_ENV=production
ENV CI=true

# Build the React app using Vite (use npx to avoid permission issues)
RUN npx vite build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built React files from the build stage
COPY --from=build /app/dist .

# Ensure Nginx serves on Cloud Run expected port
EXPOSE 8080

# Use a custom Nginx configuration if required
COPY nginx.conf /etc/nginx/nginx.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


