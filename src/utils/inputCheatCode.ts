export default function inputCheatCode (code: string): string | undefined {
  const codes = {
    GETMONEY: '+$1000000',
    GETLIFE: '+999HP'
  }
  if (code in codes) {
    return codes[code]
  } else {
    return undefined
  }
}
