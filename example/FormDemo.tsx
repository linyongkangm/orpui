import { Input, InputNumber, Checkbox, Radio, Select, useModel } from '$component/Form';
import * as React from 'react';


function Test(props: {
  test: number
}) {
  return <div>{props}</div>
}

export default function FormDemo() {
  const stringModel = useModel('');
  const numberModel = useModel(1);
  const booleanModel = useModel(true);
  const radioModel = useModel('2', 'self name');
  const selectModel = useModel('');
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
      <Select model={selectModel} >
        <Select.Option value='1'>111</Select.Option>
        <Select.Option value='2'>111</Select.Option>
      </Select>
    </div>
  );
}