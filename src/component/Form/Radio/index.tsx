import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  model: Model<string>;
}

function Radio(props: IProps) {
  const {
    model,
    name = model.ename,
    value,
    onChange,
    checked,
    ...others
  } = props;
  return (
    <div className={prefixTo('radio__wrapper')}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={value === model.value}
        onChange={(e) => {
          model(e.target.value);
          if (onChange) onChange(e);
        }}
        {...others}></input>
    </div>
  );
}

export default withPredefined(Radio);
