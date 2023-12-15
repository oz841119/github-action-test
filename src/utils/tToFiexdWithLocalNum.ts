export default function tToFiexdWithLocalNum (val: number | string, precision: number = 2): string | number {
  const EMPTY_STRING = ''
  if (val === EMPTY_STRING) {
    return val // 若為空字串則拋回原值
  }
  const numberVal = Number(val)
  if (isNaN(Number(val))) {
    return val
  }
  return Number(numberVal.toFixed(precision)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
