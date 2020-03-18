import { lazy } from 'react';

const SignUp = lazy(() => import('./auth/sign-up/SignUp'));

export const routes = [
    { path: "/sign-up", exact: true, component: SignUp },
];
