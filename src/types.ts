export type Position = 'top' | 'left' | 'right' | 'bottom';
export type Parameters<T> = T extends (...args: infer T) => any ? T : never;
export type ParameterProps<T> = Parameters<T>[0];