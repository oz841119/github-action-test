import inputCheatCode from '../../src/utils/inputCheatCode'
describe('utils: inputCheatCode: branch coverage = 50', () => {
  test('input "GIVEMEAAPPLE"', () => {
    expect(inputCheatCode('GIVEMEAAPPLE')).toBe(undefined)
  })
  test('input "GETMONEY"', () => {
    expect(inputCheatCode('GETMONEY')).toBe('+$1000000')
  })
})
