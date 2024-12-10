
export function calcNonDecimalValue(value: number, decimals: number): number {
    return Math.trunc(value * (Math.pow(10, decimals)))
  }
  
  export function calcDecimalValue(value: number, decimals: number): number {
    return value / (Math.pow(10, decimals))
  }