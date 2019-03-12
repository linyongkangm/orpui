import { Position } from '$src/types';


// tslint:disable-next-line:max-line-length
function withTypeof<T>(type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function') {
  return (value: any): value is T => typeof value === type;
}
export const isString = withTypeof<string>('string');
export const isNumber = withTypeof<number>('number');
// export const isBigint = withTypeof<bigint>('bigint');
export const isBoolean = withTypeof<boolean>('boolean');
export const isSymbol = withTypeof<symbol>('symbol');
export const isUndefined = withTypeof<undefined>('undefined');
export const isObject = withTypeof<object>('object');
// export const isFunction = withTypeof<Function>('function');

export function withPrefix(prefix: string) {
  return (name: string) => `${prefix}-${name}`;
}

export function numberToPercent(num: number) {
  return `${num * 100}%`;
}

export function toCSSValue(value: number | string) {
  if (isUndefined(value)) { return undefined; }
  return isNumber(value) ? `${value}px` : value;
}

export function addClassName<P extends string | string[]>(original: P, added: string): P {
  if (!added) { return original; }
  if (isString(original)) {
    return (original.split(' ').concat(added).join(' ')) as P;
  } else if (Array.isArray(original)) {
    return (original.concat(added)) as P;
  }
}

export function hasClassName(original: string | string[] = [], judged: string): boolean {
  return !!judged && new Set(isString(original) ? [original] : original).has(judged);
}

export function removeClassName<P extends string | string[]>(original: P, removed: string): P {
  if (!removed) { return original; }
  if (hasClassName(original, removed)) {
    if (isString(original)) {
      return (original.split(' ').filter((name) => name !== removed).join(' ')) as P;
    } else if (Array.isArray(original)) {
      return (original.filter((name) => name !== removed)) as P;
    }
  }
  return original;
}



interface IOuter {
  (client: DOMRect | ClientRect, target: DOMRect | ClientRect): boolean;
}

export const isOuterTop: IOuter = (client, target) => target.top < client.top;
export const isOuterLeft: IOuter = (client, target) => target.left < client.left;
export const isOuterRight: IOuter = (client, target) => target.right > client.right;
export const isOuterBottom: IOuter = (client, target) => target.bottom > client.bottom;
export const isOuter: IOuter = (client, target) => {
  return isOuterTop(client, target) || isOuterLeft(client, target) || isOuterRight(client, target) || isOuterBottom(client, target);
}
export const outerPositions = (client: DOMRect | ClientRect, target: DOMRect | ClientRect) => {
  const ps: Array<Position> = [];
  if (isOuterTop(client, target)) ps.push('top');
  if (isOuterLeft(client, target)) ps.push('left');
  if (isOuterRight(client, target)) ps.push('right');
  if (isOuterBottom(client, target)) ps.push('bottom');
  if (ps.length === 0) return null;
  return ps;
}