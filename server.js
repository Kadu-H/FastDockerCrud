import fastify from "fastify";

const startServer = () => {
    const server = fastify({
        logger: true,
    });

    server.get("/", (req, res) => {
        return res.send({ msg: "Hello World" });
    })

    server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        console.log(`Servidor rodando em: ${address}`);
    })
}

startServer();