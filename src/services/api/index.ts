import axios from 'axios';
import { API_URL } from 'configs';

const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

const instance = axios.create({
    headers: defaultHeaders
});

let headers: any = { ...defaultHeaders };

instance.defaults.baseURL = API_URL;

instance.interceptors.request.use((config) => {
    config.headers = headers;
    return config;
});

instance.interceptors.response.use(
    (response) => {
        if (response.data) return response.data;
        return Promise.reject({ message: '' });
    },
    (error) => {
        if (error) {
            console.warn('API error response: ', error);
            const message = error.data?.message || ''; // TODO: handle when API error
            return Promise.reject({ message });
        } else {
            return Promise.reject({ message: '' });
        }
    }
);

export const setAuthorization = (token: string) => {
    if (token != '') headers = { ...headers, Authorization: `Bearer ${token}` };
    else delete headers['Authorization'];
};

export const get = async (path: string, params: any) => {
    const res = await instance.get(`/${path}`, { params });
    return res.data;
};

export const post = async (path: string, params: any) => {
    const res = await instance.post(`/${path}`, params);
    return res.data;
};

export const put = async (path: string, params: any) => {
    const res = await instance.put(`/${path}`, params);
    return res.data;
};

export const del = async (path: string) => {
    const res = await instance.delete(`/${path}`);
    return res.data;
};
