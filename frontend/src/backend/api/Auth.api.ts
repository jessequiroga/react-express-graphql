import axious from '../axios.service';
import { Endpoints } from '../enums/endpoints.enum';
import { ISignInRequest } from '../interfaces/sign-in.interface';
import { AxiosResponse } from 'axios';

class AuthApi {

    public async signIn(body: ISignInRequest): Promise<{jwt: string}> {
        const results: AxiosResponse = await axious.post(Endpoints.Login, body);

        return results.data
    }
}

export default new AuthApi();
