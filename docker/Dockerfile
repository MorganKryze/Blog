FROM node:slim AS build

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies with cache optimization
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM nginx:alpine AS production

# Copy nginx configuration 
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add security headers
RUN echo "add_header X-Frame-Options DENY;" >> /etc/nginx/conf.d/default.conf && \
    echo "add_header X-Content-Type-Options nosniff;" >> /etc/nginx/conf.d/default.conf && \
    echo "add_header X-XSS-Protection \"1; mode=block\";" >> /etc/nginx/conf.d/default.conf && \
    echo "add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'\";" >> /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]