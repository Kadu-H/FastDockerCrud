import prisma from "../db/prisma.js";

export async function getAllItems() {
    return await prisma.item.findMany();
}

export async function getItemById(id) {
    return await prisma.item.findUnique({ where: { id: parseInt(id) } });
}

export async function createItem(data) {
    return await prisma.item.create({ data });
}

export async function updateItem(id, data) {
    return await prisma.item.update({
        where: { id: parseInt(id) },
        data
    });
}

export async function deleteItem(id) {
    return await prisma.item.delete({ where: { id: parseInt(id) } });
}