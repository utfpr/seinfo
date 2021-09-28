FROM node:14-alpine
WORKDIR /usr/src/frontend
COPY package*.json ./
RUN yarn install
EXPOSE 8080
CMD ["npm", "start"]
