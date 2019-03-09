import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}
export default function Item(props: IProps) {
  const {
    children,
    ...others
  } = props;
  return (
    <div {...others}>{children}</div>
  );
}