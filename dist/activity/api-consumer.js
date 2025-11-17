"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivity = exports.updateActivity = exports.getActivityById = exports.getAllActivities = exports.createActivity = void 0;
const axios_1 = require("axios");
const API_BASE_URL = 'http://localhost:3000';
const axiosInstance = axios_1.default.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
const createActivity = async (activityData) => {
    var _a;
    try {
        const response = await axiosInstance.post('/activity', activityData);
        console.log('Actividad creada:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error al crear la actividad:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw error;
    }
};
exports.createActivity = createActivity;
const getAllActivities = async () => {
    var _a;
    try {
        const response = await axiosInstance.get('/activity');
        console.log('Actividades encontradas:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error al obtener las actividades:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw error;
    }
};
exports.getAllActivities = getAllActivities;
const getActivityById = async (id) => {
    var _a;
    try {
        const response = await axiosInstance.get(`/activity/${id}`);
        console.log(`Actividad con ID ${id} encontrada:`, response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error al obtener la actividad con ID ${id}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw error;
    }
};
exports.getActivityById = getActivityById;
const updateActivity = async (id, updateData) => {
    var _a;
    try {
        const response = await axiosInstance.patch(`/activity/${id}`, updateData);
        console.log(`Actividad con ID ${id} actualizada:`, response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error al actualizar la actividad con ID ${id}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw error;
    }
};
exports.updateActivity = updateActivity;
const deleteActivity = async (id) => {
    var _a;
    try {
        const response = await axiosInstance.delete(`/activity/${id}`);
        console.log(`Actividad con ID ${id} eliminada.`);
        return response.data;
    }
    catch (error) {
        console.error(`Error al eliminar la actividad con ID ${id}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw error;
    }
};
exports.deleteActivity = deleteActivity;
//# sourceMappingURL=api-consumer.js.map