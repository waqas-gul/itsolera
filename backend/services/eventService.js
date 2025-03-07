import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

export const getEvents = async (type = 'All', page = 1) => {
  const response = await axios.get(`${API_URL}?type=${type}&page=${page}`);
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createEvent = async (eventData, token) => {
  const formData = new FormData();
  Object.entries(eventData).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// Add update and delete functions similarly