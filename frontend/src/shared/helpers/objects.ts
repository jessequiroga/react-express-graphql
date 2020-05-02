export const toModel = <T extends object>(model: T, ...objects: object[]): T => {
  type K = keyof T
  const reversedObjectList = objects.filter(item => !!item).reverse() as Array<T>
  const keysOfModel = Object.keys(model) as Array<K>

  return keysOfModel.reduce((acc, key) => {
    const toModel = reversedObjectList.find(dataItem => dataItem.hasOwnProperty(key))
    if (toModel) {
      Object.assign(acc, { [key]: toModel[key] })
    }
    return acc
  }, model)
}
