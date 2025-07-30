# FastDockerCrud

Este projeto tem como objetivo ser um exemplo simples de CRUD utilizando o framework Fastify com Node.js, rodando em containners Dockers com o Docker Compose, juntamente com o banco PostgreSQL. O intuito principal é o aprendizado prático de como criar APIs rápidas com Fastify e como containerizar aplicações Node.js.

## Objetivo

Aprender a:
- Criar uma API RESTful simples com Fastify
- Containerizar aplicações Node.js usando Docker
- Containerizar tambem o banco de dados Postgre
- Executar e acessar a aplicação via Docker

## Onde estamos!
Completamos o processo do CRUD, e está tudo rodando no Docker!

## Como rodar a aplicação com Docker Compose

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado na sua máquina
- [Docker Compose](https://docs.docker.com/compose/) instalado

### Passos

1. **Clone o repositório (se necessário):**
   ```sh
   git clone https://github.com/Kadu-H/FastDockerCrud.git
   cd FastDockerCrud
   ```

2. **Configure as variaveis de ambientes (Conexão com banco de dados):**
   Crie um arquivo .env e adicione a url de conexão com o banco de dados, ou apenas renomei o arquivo ".env.example" para ".env"
   ```sh
   DATABASE_URL="postgresql://fastdockercrud:password_fdc@localhost:5432/polls?schema=public"

   ```

3. **Suba os containers (servidor e banco de dados):**
   ```sh
   docker compose build
   ```

4. **Rode o container:**
   ```sh
   docker compose up
   ```

5. **Acesse a aplicação:**
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

## Rotas da API

### Criar um item
- **POST** `/items`
- **Payload:**
  ```json
  {
    "name": "Nome do item",
    "description": "Descrição opcional"
  }
  ```
- **Resposta:** 201 Created  
  ```json
  {
    "id": 1,
    "name": "Nome do item",
    "description": "Descrição opcional"
  }
  ```

### Listar todos os itens
- **GET** `/items`
- **Resposta:** 200 OK  
  ```json
  [
    {
      "id": 1,
      "name": "Nome do item",
      "description": "Descrição opcional"
    }
  ]
  ```

### Buscar item por ID
- **GET** `/items/:id`
- **Resposta:** 200 OK  
  ```json
  {
    "id": 1,
    "name": "Nome do item",
    "description": "Descrição opcional"
  }
  ```
- **Se não encontrado:** 404  
  ```json
  { "message": "Item não foi encontrado!" }
  ```

### Atualizar item
- **PUT** `/items/:id`
- **Payload:**
  ```json
  {
    "name": "Novo nome",
    "description": "Nova descrição"
  }
  ```
- **Resposta:** 200 OK  
  ```json
  {
    "id": 1,
    "name": "Novo nome",
    "description": "Nova descrição"
  }
  ```
- **Se não encontrado:** 404  
  ```json
  { "message": "Item não foi encontrado!" }
  ```

### Remover item
- **DELETE** `/items/:id`
- **Resposta:** 204 No Content  
  ```json
  { "message": "Item foi excluido!" }
  ```
- **Se não encontrado:** 404  
  ```json
  { "message": "Item não foi encontrado!" }
  ```

---

## Estrutura dos arquivos principais

- `server.js`: Servidor Fastify e registro das rotas
- `db/prisma.js`: Instância do Prisma Client
- `prisma/schema.prisma`: Schema do banco de dados
- `models/itemModel.js`: Funções de acesso ao banco
- `controllers/itemController.js`: Lógica das rotas
- `routes/itemRoutes.js`: Definição das rotas
- `Dockerfile` e `docker-compose.yml`: Configuração dos containers
- `entrypoint.sh`: Script de inicialização do servidor e migrações do banco de dados

---
Sinta-se à vontade para modificar e experimentar!
