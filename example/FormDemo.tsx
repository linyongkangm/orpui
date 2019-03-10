import { Input, InputNumber, Checkbox, useModel } from '$component/Form';
import * as React from 'react';


export default function FormDemo() {
  const stringModel = useModel('');
  const numberModel = useModel(1);
  const booleanModel = useModel(true);
  return (
    <div>
      <Input model={stringModel}></Input>
      <InputNumber model={numberModel} onChange={
        (e) => {
          console.log('target', e.target.value);
        }
      }></InputNumber>
      <Checkbox model={booleanModel}></Checkbox>
    </div>

  );
}