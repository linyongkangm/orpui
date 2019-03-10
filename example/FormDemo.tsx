import { Input, InputNumber, Checkbox, Radio, useModel } from '$component/Form';
import * as React from 'react';


export default function FormDemo() {
  const stringModel = useModel('');
  const numberModel = useModel(1);
  const booleanModel = useModel(true);
  const radioModel = useModel('2', 'self name');

  return (
    <div>
      <Input model={stringModel}></Input>
      <InputNumber model={numberModel} onChange={
        (e) => {
          console.log('target', e.target.value);
        }
      }></InputNumber>
      <Checkbox model={booleanModel}></Checkbox>
      <Radio model={radioModel} value='1'></Radio>
      <Radio model={radioModel} value='2'></Radio>
    </div>

  );
}