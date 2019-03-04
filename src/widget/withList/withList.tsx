import * as React from 'react';
import ListWarper from './ListWarper';
import withItem from './withItem';

interface IProps<LT, IT, IP> {
  attr?: React.HTMLAttributes<LT>;
  itemAttr?: React.HTMLAttributes<IT>;
  tag?: keyof JSX.IntrinsicElements;
  itemTag?: keyof JSX.IntrinsicElements;
  data: IP[];
}

function withList<IP>(Item: React.JSXElementConstructor<IP>) {
  const RealItem = withItem(Item);
  // tslint:disable-next-line:max-line-length
  return function RealList<LT extends HTMLElement = HTMLDivElement, IT extends HTMLElement = HTMLDivElement>(props: IProps<LT, IT, IP>) {
    const {
      attr,
      itemAttr,
      tag,
      itemTag,
      data,
    } = props;
    return (
      <ListWarper<LT> tag={tag} {...attr}>
        {
          data.map((d, index) => <RealItem<IT> {...itemAttr} tag={itemTag} key={index} data={d}></RealItem>)
        }
      </ListWarper>
    );
  };
}
export default withList;
