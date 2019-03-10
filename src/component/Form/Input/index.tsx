import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  model: Model<string>;
}

function Input(props: IProps) {
  const {
    model,
    name = model.ename,
    value = model.value,
    onChange,
    ...others
  } = props;
  return (
    <div className={prefixTo('input__wrapper')}>
      <input
        name={name}
        value={value}
        onChange={(e) => {
          model(e.target.value);
          if (onChange) onChange(e);
        }}
        {...others}></input>
    </div>
  );
}

export default withPredefined(Input);
