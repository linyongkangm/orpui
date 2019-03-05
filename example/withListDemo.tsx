import withList from '$widget/withList';
import * as React from 'react';

interface IItem {
  index: number;
}

function Item(props: IItem) {
  return <div>{props.index}</div>;
}

const List = withList(Item);

export default function withListDemo() {
  const data = Array.from({ length: 10 }, (v, k) => ({ index: k }));
  return (
    <List data={data}></ List>
  );
}
