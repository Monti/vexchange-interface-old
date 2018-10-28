export function pipsToETH(pips) {
  return pips / 10 ** 18;
}
export function pipsToVET(pips) {
  return pips / 10 ** 18;
}
export function roundDecimalPoints(num, points) {
  return Math.round(num * 10 ** points) / 10 ** points;
}

export const DAILY_BLOCKS_IN_ETH = 6000;
