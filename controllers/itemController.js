import { getAllItems, getItemById, updateItem, deleteItem, createItem } from "../models/itemModel.js";

export async function listAllItems(req, reply) {
    const items = await getAllItems();
    reply.send(items);
}

export async function showItemById(req, reply) {
    const item = await getItemById(req.params.id);
    if (!item) {
        return reply.code(404).send({ message: 'Item não foi encontrado!' });
    }
    reply.send(item);
}

export async function create(req, reply) {
    const { name, description } = req.body;
    const item = await createItem({ name, description });
    reply.code(201).send(item);
}

export async function update(req, reply) {
    try {
        const { name, description } = req.body;
        const item = await updateItem(req.params.id, { name, description });
        reply.send(item);
    } catch {
        reply.code(404).send({ message: 'Item não foi encontrado!' });
    }
}

export async function remove(req, reply) {
    try {
        await deleteItem(req.params.id);
        reply.code(204).send({ message: 'Item foi excluido!' });
    } catch {
        reply.code(404).send({ message: 'Item não foi encontrado!' });
    }
}
