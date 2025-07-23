FROM node:alpine

WORKDIR /usr/server

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]