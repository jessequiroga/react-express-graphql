import AuthApi from '../../backend/api/Auth.api';
import { ISignInRequest } from '../../backend/interfaces/sign-in.interface';
import Cookie from 'js-cookie';
import { Cookies } from '../enums/cookie.enum';

export class AuthService {

    public async signIn(body: ISignInRequest): Promise<void> {
        const { jwt } = await AuthApi.signIn(body);
        Cookie.set(Cookies.Jwt, jwt);
    }
}

export default new AuthService();
