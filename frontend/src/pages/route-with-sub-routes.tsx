import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { TRouteConfig } from './config'
import { RoutePrivate } from './route-private'

export const RouteWithSubRoutes: React.FC<TRouteConfig> = ({ isPrivate, Component, routes, path }) => {
  const RouteComponent: React.FC<RouteProps> = props => {
    if (!!isPrivate) {
      return <RoutePrivate {...props} />
    } else {
      return <Route {...props} />
    }
  }

  return (
    <RouteComponent path={path}>
      <Component>{routes && routes.map(routeProps => <RouteWithSubRoutes {...routeProps} />)}</Component>
    </RouteComponent>
  )
}
export default RouteWithSubRoutes
