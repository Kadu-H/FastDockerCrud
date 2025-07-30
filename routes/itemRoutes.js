import { listAllItems, showItemById, create, remove, update } from "../controllers/itemController.js";

export default async function itemsRoutes(fastify) {
    fastify.get('/items', listAllItems);
    fastify.post('/items', create);
    fastify.get('/items/:id', showItemById);
    fastify.put('/items/:id', update);
    fastify.delete('/items/:id', remove);
}