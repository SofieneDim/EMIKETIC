import axios from 'axios';
import { APP_API_URL } from '../../../setup/config/env'


const api = axios.create({
  baseURL: APP_API_URL,
});

export default api