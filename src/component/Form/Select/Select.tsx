import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import { Model } from '$component/Form';
import Option from './Option';
type Parameters<T> = T extends (...args: infer T) => any ? T : never;

interface IProps extends React.SelectHTMLAttributes<HTMLInputElement> {
  children?: React.ReactElement<Parameters<typeof Option>[0]>[];
  model?: Model<string>;
  onValueChange?: (value: string) => void;
  datasource?: Parameters<typeof Option>[0][];
}

function Select(props: IProps) {
  const {
    model,
    name = model && model.ename,
    value = model && model.value,
    onValueChange,
    onChange,
    children,
    datasource,
    ...others
  } = props;
  const datasources = datasource || (Array.isArray(children) ? children : [children]).map(child => child.props);
  return (
    <div className={prefixTo('select__wrapper')}>
      <input
        name={name}
        value={value}
        onChange={(e) => {
          if (model) model(e.target.value);
          if (onValueChange) onValueChange(e.target.value);
          if (onChange) onChange(e);
        }}
        {...others}></input>
      <div contentEditable onChange={e => console.log(e)}>

      </div>
      <div className={prefixTo('options__wrapper')}>
        {
          datasources.map((data, index) => {
            return <Option
              key={index}
              {...data}
              onClick={(e) => {
                const val = data.value as string;
                if (model) model(val);
                if (onValueChange) onValueChange(val);
              }}
            ></Option>
          })
        }
      </div>

    </div>
  );
}

export default withPredefined(Select);
