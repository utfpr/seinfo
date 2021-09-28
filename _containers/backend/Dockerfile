FROM node:14-alpine
WORKDIR /usr/src/backend
COPY package*.json ./
RUN yarn install
EXPOSE 3000
CMD ["npm", "start"]
