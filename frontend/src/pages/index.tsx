import React, { lazy, Suspense } from 'react';
import Loader from '../core/components/loader/Loader';
import { Route } from 'react-router-dom';
import { IRoute } from '../core/interfaces/route.interface';

const routes: IRoute[] = [
    {
        path: '/sign-in',
        exact: true,
        component: lazy(() => import('./auth/sign-in/SignIn'))
    },
];

export function AppRouter() {
    return (
        <Suspense fallback={<Loader/>}>
            {routes.map(route => (
                <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Suspense>
    );
}
