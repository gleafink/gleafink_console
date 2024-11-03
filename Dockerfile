# Build environment
FROM node:18-alpine AS builder
ENV NODE_ENV production
WORKDIR /app

# Copy only the package.json and yarn.lock first
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Now copy the rest of the application files
COPY . .

# Build the React app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]



# # build environment
# FROM node:18-alpine AS builder
# ENV NODE_ENV development
# WORKDIR /app
# # Copy package.json and yarn.lock to container
# COPY package*.json yarn.lock ./

# # Install dependencies
# # RUN yarn cache clean
# RUN yarn install


# # Copy all local files to the container
# COPY . .

# # Build the React app
# RUN yarn build

# # Expose the port that your app runs on
# # EXPOSE 80

# # Command to run your app in development mode
# CMD ["yarn", "dev"]


# # Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV development
# # Copy built assets from builder
# COPY --from=builder /app/build /usr/share/nginx/html
# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# # Expose port
# EXPOSE 80
# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
