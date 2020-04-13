import { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import { Cookies } from '../enums/cookie.enum';

export function addJwtToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    const jwt = Cookie.get(Cookies.Jwt);

    if(jwt) {
        config.headers = {...config.headers, 'Authorization': `Bearer ${jwt}`};
    }

    return config;
}
