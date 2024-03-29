import axios, { isAxiosError } from 'axios';
import { BACKEND_URL_API } from '../variables';

const baseUrl: string = BACKEND_URL_API;

export const insertarDocumento = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/documents`, data);
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            return error;
        }
        return error;
    }
}
