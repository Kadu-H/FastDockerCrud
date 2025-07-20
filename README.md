# FastDockerCrud

Este projeto tem como objetivo ser um exemplo simples de CRUD utilizando o framework Fastify com Node.js, rodando em um container Docker. O intuito principal é o aprendizado prático de como criar APIs rápidas com Fastify e como containerizar aplicações Node.js.

## Objetivo

Aprender a:
- Criar uma API RESTful simples com Fastify
- Containerizar aplicações Node.js usando Docker
- Executar e acessar a aplicação via Docker

## Onde estamos!
Estamos no inicio da projeto, onde apenas a parte inicial que surgirá todo o resto está construida!

## Como rodar a aplicação com Docker

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado na sua máquina

### Passos

1. **Clone o repositório (se necessário):**
   ```sh
   git clone https://github.com/Kadu-H/FastDockerCrud.git
   cd FastDockerCrud
   ```

2. **Construa a imagem Docker:**
   ```sh
   docker build -t fastdockercrud .
   ```

3. **Rode o container:**
   ```sh
   docker run -p 3000:3000 fastdockercrud
   ```

4. **Acesse a aplicação:**
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

Se tudo estiver correto, você verá a mensagem:
```json
{"msg":"Hello World"}
```

## Estrutura dos arquivos principais

- `server.js`: Código principal do servidor Fastify.
- `Dockerfile`: Instruções para criar a imagem Docker.

---
Sinta-se à vontade para modificar e experimentar!
