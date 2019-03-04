import * as React from 'react';
import ItemWarper from './ItemWarper';

interface IProps<IP, IT> extends React.HTMLAttributes<IT> {
  tag?: keyof JSX.IntrinsicElements;
  data: IP;
}

function withItem<IP>(Item: React.JSXElementConstructor<IP>) {
  return function RealItem<IT extends HTMLElement>(props: IProps<IP, IT>) {
    const {
      data,
      ...others
    } = props;
    return (
      <ItemWarper<IT> {...others}>
        <Item {...data}></Item>
      </ItemWarper>
    );
  };
}
export default withItem;
