FROM node:14
WORKDIR /app
COPY . .
RUN npm ci --production && npm run build
CMD node server
