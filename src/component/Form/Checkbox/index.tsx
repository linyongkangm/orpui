import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  model: Model<boolean>;
}

function Checkbox(props: IProps) {
  const {
    model,
    checked = model.value,
    onChange,
    ...others
  } = props;
  return (
    <div className={prefixTo('checkbox__wrapper')}>
      <input
        type='checkbox'
        checked={checked as boolean}
        onChange={(e) => {
          model(e.target.checked);
          if (onChange) onChange(e);
        }}
        {...others}></input>
    </div>
  );
}

export default withPredefined(Checkbox);
