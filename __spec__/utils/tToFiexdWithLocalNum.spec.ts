import tToFiexdWithLocalNum from '../../src/utils/tToFiexdWithLocalNum'
describe('utils: tToFiexdWithLocalNum', () => {
  test('', () => {
    expect(tToFiexdWithLocalNum(999999)).toBe('999,999.00')
  })
  test('', () => {
    expect(tToFiexdWithLocalNum('999')).toBe('999.00')
  })
  test('', () => {
    expect(tToFiexdWithLocalNum('999999.7777')).toBe('999,999.78')
  })
  test('', () => {
    expect(tToFiexdWithLocalNum('999.99')).toBe('999.99')
  })
  test('', () => {
    expect(tToFiexdWithLocalNum(999)).toBe('999.00')
  })
  test('', () => {
    expect(tToFiexdWithLocalNum(123123.983)).toBe('123,123.98')
  })
})
