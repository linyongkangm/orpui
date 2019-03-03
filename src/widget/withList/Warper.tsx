
import * as React from 'react';

interface IProps<T> extends React.HTMLAttributes<T> {
  tag?: keyof JSX.IntrinsicElements;
}

function Warper<T extends HTMLElement>(props: IProps<T>) {
  const {
    tag = 'div',
    children,
    ...others
  } = props;
  const Tag: any = tag;
  return (
    <Tag {...others}>
      {children}
    </Tag>
  );
}

export default Warper;
