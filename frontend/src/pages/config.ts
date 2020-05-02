import React from 'react';
import NotFound from './not-found/NotFound';
import SignIn from './auth/sign-in/SignIn';

export enum ROUTES {
  ROOT = 'ROOT',
  NOT_FOUND = 'NOT_FOUND',
  SIGN_IN = 'SIGN_IN'
}

export type TRouteConfig = {
  path: string
  key: ROUTES
  label: string
  Component: React.ComponentType
  exact?: boolean
  isPrivate?: boolean
  routes?: TRouteConfig[]
}

export const routesConfig: TRouteConfig[] = [
  {
    path: '/sign-in',
    key: ROUTES.SIGN_IN,
    label: 'page-sign-in',
    exact: true,
    Component: SignIn,
    isPrivate: false,
  },
  {
    path: '*',
    key: ROUTES.NOT_FOUND,
    label: 'page-not-found',
    Component: NotFound,
  },
]

export default routesConfig
