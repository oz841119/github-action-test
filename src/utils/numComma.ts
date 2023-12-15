export const numComma = (number: number): string => {
  return number.toLocaleString()
}

type THINK_THINK = any
type RecursiveObject = Record<string, any>
export const numCommaByRecursive = (param: any): THINK_THINK => {
  if (typeof param === 'object' && param !== null) {
    if (Array.isArray(param)) {
      return param.map((item: any) => numCommaByRecursive(item))
    } else {
      const result: RecursiveObject = {}
      for (const key in param) {
        result[key] = numCommaByRecursive(param[key])
      }
      return result
    }
  } else if (typeof param === 'number' || (typeof param === 'string' && !isNaN(Number(param)) && param !== '')) {
    return numComma(Number(param))
  } else {
    return param
  }
}
