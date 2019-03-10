import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  model: Model<number | string>;
}

function InputNumber(props: IProps) {
  const {
    model,
    name = model.ename,
    value = model.value,
    onChange,
    ...others
  } = props;
  return (
    <div className={prefixTo('input-number__wrapper')}>
      <input
        name={name}
        value={value}
        onChange={(e) => {
          let targetValue = e.target.value;
          const len = targetValue.length - 1;
          let last = targetValue[len];
          if (last === '.') {
            if (targetValue.split('.').length > 2) {
              targetValue = targetValue.substr(0, len);
            }
          } else if (isNaN(Number(last))) {
            targetValue = targetValue.substr(0, len);
          }
          if (targetValue === e.target.value) {
            model(targetValue);
            if (onChange) onChange(e);
          }
        }}
        {...others}></input>
    </div>
  );
}

export default withPredefined(InputNumber);
