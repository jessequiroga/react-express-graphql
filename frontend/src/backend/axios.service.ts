import axios from 'axios';
import { environment } from '../environment';
import { addJwtToRequest } from '../core/interceptors/jwt.interceptor';

const instance = axios.create({
    baseURL: environment.backendUrl
});

instance.interceptors.request.use(addJwtToRequest);

export default instance;
