import Input from './Input';
import InputNumber from './InputNumber';
import './style.scss';
import * as React from 'react';


export {
  Input, InputNumber
}

export type Model<V> = React.Dispatch<React.SetStateAction<V | string>> & { value: V | string };

export function useModel<V>(defaultValue: V | string) {
  const [value, setValue] = React.useState(defaultValue);
  return getModel<V>(value, setValue);
}

function getModel<V>(val: V | string, set: React.Dispatch<React.SetStateAction<V>>): Model<V> {
  const temp = set as Model<V>;
  temp.value = val;
  return temp;
}



