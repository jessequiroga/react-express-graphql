import dev from './environment.dev';
import prod from './environment.prod';
import { IEnvironment } from '../shared/interfaces/environment.interface';

const DEFAULT_ENV = 'dev';
const env = process.env.REACT_APP_ENVIRONMENT || DEFAULT_ENV;

const config: {[key: string]: IEnvironment} = {
    dev,
    prod
};

export const environment: IEnvironment = config[env];
