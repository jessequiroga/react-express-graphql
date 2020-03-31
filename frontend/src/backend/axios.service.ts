import axios from 'axios';
import { environment } from '../environment';

const instance = axios.create({
    baseURL: environment.backendUrl,
});

export default instance;
