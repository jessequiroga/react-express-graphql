import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { AppRouterSingleton } from './module-app-router';
import { ROUTES } from './config';


export const RoutePrivate: React.FC<RouteProps> = props => {
  // const isLogged = useSelector(selectUserIsLogged)
  const isLogged = false
  const routeTo = AppRouterSingleton.getByKey(ROUTES.NOT_FOUND)

  const to = { pathname: routeTo.path }
  if (!isLogged) {
    return <Redirect to={to} />
  }

  return <Route {...props} />
}
export default RoutePrivate
