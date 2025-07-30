FROM node:22-alpine

WORKDIR /usr/server

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY . .
COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

USER node

EXPOSE 3000

CMD ["./entrypoint.sh"]