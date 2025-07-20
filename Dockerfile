FROM node:alpine

WORKDIR /usr/server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]