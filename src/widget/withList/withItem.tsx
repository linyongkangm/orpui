import { IFunctionalRender } from '$root/src/types';
import * as React from 'react';
import ItemWarper from './ItemWarper';

interface IProps<IP, IT> extends React.HTMLAttributes<IT> {
  tag?: keyof JSX.IntrinsicElements;
  data: IP;
}

function withItem<IP>(Item: IFunctionalRender<IP>) {
  return function RealItem<ID extends HTMLElement>(props: IProps<IP, ID>) {
    const {
      data,
      ...others
    } = props;
    return (
      <ItemWarper<ID> {...others}>
        <Item {...data}></Item>
      </ItemWarper>
    );
  };
}
export default withItem;
