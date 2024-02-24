# Use the official Node.js image
FROM node

# Set the working directory
WORKDIR /usr/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN yarn build

# Set environment variables
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start built code
CMD ["yarn", "start"]

# Set the user to run the app
USER node
