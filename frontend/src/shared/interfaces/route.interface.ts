import { LazyExoticComponent } from 'react';

export interface IRoute {
    path: string;
    exact: boolean;
    component: LazyExoticComponent<any>;
    canActivate?: Function;
}
