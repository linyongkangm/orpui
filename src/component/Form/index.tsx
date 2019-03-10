import Input from './Input';
import InputNumber from './InputNumber';
import Checkbox from './Checkbox';
import './style.scss';
import * as React from 'react';


export {
  Input, InputNumber, Checkbox
}

export type Model<V = string> = React.Dispatch<React.SetStateAction<V>> & { value: string | V };

export function useModel<V>(defaultValue: V) {
  const [value, setValue] = React.useState(defaultValue);
  return getModel<V>(value, setValue);
}

function getModel<V>(val: V, set: React.Dispatch<React.SetStateAction<V>>) {
  const temp = set as Model<V>;
  temp.value = val as any;
  return temp;
}



