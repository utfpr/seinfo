FROM node:14-alpine
WORKDIR /usr/src/backend
COPY backend-controle-seinfo/package*.json ./

RUN yarn install
EXPOSE 3000
CMD ["npm", "start"]
