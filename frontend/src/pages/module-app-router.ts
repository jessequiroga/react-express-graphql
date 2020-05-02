import { ROUTES, TRouteConfig, routesConfig } from './config'

class AppRouter {
  readonly _map: { [k: string]: TRouteConfig }
  constructor(listOfRoutes: TRouteConfig[]) {
    this._map = AppRouter.createMap(listOfRoutes)
  }
  static createMap(listOfRoutes: TRouteConfig[]) {
    let result: { [key: string]: TRouteConfig } = {}
    listOfRoutes.forEach(route => {
      if (route.routes) {
        result = { ...result, ...AppRouter.createMap(route.routes) }
      } else {
        result = { ...result, [route.key]: route }
      }
    })
    return result
  }
  public getByKey(key: ROUTES): TRouteConfig {
    return this._map[key]
  }
}
export const AppRouterSingleton = new AppRouter(routesConfig)
