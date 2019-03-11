import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement>, React.OptionHTMLAttributes<HTMLDivElement> {

}

function Option(props: IProps) {
  const {
    value,
    children = value,
    disabled,
    selected,
    ...others
  } = props;
  return (
    <div
      className={prefixTo('option__wrapper')}
      {...others}>
      {children}</div>
  );
}

export default withPredefined(Option);
