import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';

interface IBlockProps extends React.HTMLAttributes<HTMLDivElement> {

}

function Block(props: IBlockProps = {}) {
  const {
    children,
    ...others
  } = props;
  return (
    <div {...others}>{children}</div>
  );
}

export default withPredefined(Block);
