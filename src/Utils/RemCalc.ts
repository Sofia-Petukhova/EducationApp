export function remCalc(pxValue: number, baseFontSize = 16): string {
  const remValue = pxValue / baseFontSize
  return `${remValue}rem`
}
