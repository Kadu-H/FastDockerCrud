#!/bin/sh

# Espera o banco ficar disponível
until nc -z -v -w30 postgres 5432
do
  echo "Esperando banco postgres subir..."
  sleep 2
done

echo "Banco disponível! Rodando migrations..."
npx prisma migrate dev --name init

echo "Iniciando aplicação..."
npm start
