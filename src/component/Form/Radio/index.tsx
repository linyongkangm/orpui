import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  model?: Model<string>;
}

function Radio(props: IProps) {
  const {
    model,
    name = model && model.ename,
    value,
    onChange,
    checked = model && model.value === value,
    ...others
  } = props;
  return (
    <div className={prefixTo('radio__wrapper')}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          if (model) model(e.target.value);
          if (onChange) onChange(e);
        }}
        {...others}></input>
    </div>
  );
}

export default withPredefined(Radio);
