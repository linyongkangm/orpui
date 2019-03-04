
import * as React from 'react';

interface IProps<T> extends React.HTMLAttributes<T> {
  tag?: keyof JSX.IntrinsicElements;
}

function Warper<T extends HTMLElement = HTMLDivElement>(props: IProps<T>) {
  const {
    tag = 'div',
    children,
    ...others
  } = props;
  const Tag: React.JSXElementConstructor<React.HTMLAttributes<T>> = tag as any;
  return (
    <Tag {...others}>
      {children}
    </Tag>
  );
}

export default Warper;
