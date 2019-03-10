import Input from './Input';
import InputNumber from './InputNumber';
import Checkbox from './Checkbox';
import Radio from './Radio';

import './style.scss';
import * as React from 'react';


export {
  Input, InputNumber, Checkbox, Radio
}

export type Model<V = string> = React.Dispatch<React.SetStateAction<V>> & {
  value: string | V;
  ename: string;
};

export function useModel<V>(defaultValue: V, name?: string) {
  const [value, setValue] = React.useState(defaultValue);
  return getModel<V>(name, value, setValue);
}

function getModel<V>(name: string, val: V, set: React.Dispatch<React.SetStateAction<V>>) {
  const temp = set as Model<V>;
  temp.value = val as any;
  temp.ename = name || (Math.random() * 100000).toFixed(0);
  return temp;
}



