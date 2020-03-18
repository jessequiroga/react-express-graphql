import { lazy } from 'react';

const Login = lazy(() => import('./auth/login/Login'));

export const routes = [
    { path: "/login", exact: true, component: Login },
];
