import fastify from "fastify";
import prisma from "./db/prisma.js";
import itemsRoutes from "./routers/itemRoutes.js";

const server = fastify({
    logger: true,
});

server.register(itemsRoutes);

const startServer = async () => {
    try {
        await prisma.$connect();
        server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
            if (err) {
                server.log.error(err);
                process.exit(1);
            }
            console.log(`Servidor rodando em: ${address}`);
        });

    } catch (error) {
        console.error(`Erro ao conectar ao banco de dados: ${error}`);
        process.exit(1);
    }
}

startServer();