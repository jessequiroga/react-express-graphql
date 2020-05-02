import { Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'
import { routesConfig, ROUTES } from './config'
import RouteWithSubRoutes from './route-with-sub-routes';
import Loader from '../core/components/loader/Loader';
import RoutePrivate from './route-private';

export const RenderRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    {routesConfig.map(route => (
                        <RouteWithSubRoutes key={route.key} {...route} />
                    ))}
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}

export { routesConfig, ROUTES, RoutePrivate, RouteWithSubRoutes }
export default RenderRoutes
