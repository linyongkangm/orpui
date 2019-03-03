
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
