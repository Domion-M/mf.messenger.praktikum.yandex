FROM node:12-slim
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD node server
