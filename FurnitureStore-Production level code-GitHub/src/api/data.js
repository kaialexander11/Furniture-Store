import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {

    all: '/data/catalog',
    byId: '/data/catalog/',
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    edit: '/data/catalog/',
    delete: '/data/catalog/',

}

export async function getAll() {
    return api.get(endpoints.all);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}   

export async function editItem(id, data) {
    return api.put(endpoints.edit + id, data); 
}

export async function deleteItem(id) {
    return api.del(endpoints.delete + id);
}

// "54d4dbf5-7f41-47ba-b485-43eccb91cb95"
