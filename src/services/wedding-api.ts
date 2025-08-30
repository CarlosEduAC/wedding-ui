import axios from 'axios';
import { environment } from '@/configs';

const api = axios.create({
  baseURL: environment.WEDDING_API_URL,
});

export default api;
