import { numCommaByRecursive } from '../../src/utils/numComma'

const sameOutputWithInputTest = (inputs: any[]): void => {
  inputs.forEach((input) => {
    test(`Same input and output test: ${input}`, () => {
      expect(numCommaByRecursive(input)).toBe(input)
    })
  })
}

describe('utils: numCommaByRecursive', () => {
  sameOutputWithInputTest(['', false, true, '123', undefined, null])
  test('1200 -> "1,200"', () => {
    expect(numCommaByRecursive(1200)).toBe('1,200')
  })
  test('1309090939 -> "1,309,090,939"', () => {
    expect(numCommaByRecursive(1309090939)).toBe('1,309,090,939')
  })
  test('1309090939 -> "1,309,090,939"', () => {
    const NUM = 1999999999909344
    const T_NUM = '1,999,999,999,909,344'
    const obj = {
      a: {
        p: NUM,
        f: {
          d: NUM,
          S: NUM,
          W: [NUM, NUM, null, NUM, '', 99999, 5]
        }
      },
      c: {
        p: NUM,
        f: {
          d: NUM,
          S: NUM,
          W: [NUM, NUM, NUM, NUM, '', NUM, 5]
        }
      }
    }
    const tObj = {
      a: {
        p: T_NUM,
        f: {
          d: T_NUM,
          S: T_NUM,
          W: [T_NUM, T_NUM, null, T_NUM, '', '99,999', '5']
        }
      },
      c: {
        p: T_NUM,
        f: {
          d: T_NUM,
          S: T_NUM,
          W: [T_NUM, T_NUM, T_NUM, T_NUM, '', T_NUM, '5']
        }
      }
    }
    expect(numCommaByRecursive(obj)).toEqual(tObj)
  })
})
