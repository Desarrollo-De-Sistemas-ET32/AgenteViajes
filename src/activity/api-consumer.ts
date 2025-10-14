import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    // buscar token en localStorage.
    const token = localStorage.getItem('jwt_token');

    // si hay token se añade a la cabecera de la petición.
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // si no funca el token lo rechaza.
    return Promise.reject(error);
  }
);

interface CreateActivityDto {
  name: string;
  description: string;
}

interface UpdateActivityDto {
  name?: string;
  description?: string;
}


//POST /activity
export const createActivity = async (activityData: CreateActivityDto) => {
  try {
    const response = await axiosInstance.post('/activity', activityData);
    console.log('Actividad creada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear la actividad:', error.response?.data || error.message);
    throw error;
  }
};

// GET /activity
export const getAllActivities = async () => {
  try {
    const response = await axiosInstance.get('/activity');
    console.log('Actividades encontradas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las actividades:', error.response?.data || error.message);
    throw error;
  }
};

//GET /activity/:id
export const getActivityById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/activity/${id}`);
    console.log(`Actividad con ID ${id} encontrada:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la actividad con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

//PATCH /activity/:id
export const updateActivity = async (id: number, updateData: UpdateActivityDto) => {
  try {
    const response = await axiosInstance.patch(`/activity/${id}`, updateData);
    console.log(`Actividad con ID ${id} actualizada:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar la actividad con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// DELETE /activity/:id
export const deleteActivity = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/activity/${id}`);
    console.log(`Actividad con ID ${id} eliminada.`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar la actividad con ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};
