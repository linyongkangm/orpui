import { Input, InputNumber, useModel } from '$component/Form';
import * as React from 'react';


export default function FormDemo() {
  const stringModel = useModel('');
  const numberModel = useModel('1');
  console.log(numberModel.value);
  return (
    <div>
      <Input model={stringModel}></Input>
      <InputNumber model={numberModel} onChange={
        (e) => {
          console.log('target', e.target.value);
        }
      }></InputNumber>
    </div>

  );
}