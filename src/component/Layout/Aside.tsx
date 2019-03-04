import * as tools from '$tools';
import { prefixTo, withIExpandPredefined } from '$widget/withPredefined';
import * as React from 'react';
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
}

function Aside(props: IProps = {}) {
  const {
    children,
    width = '100px',
    ...others
  } = props;

  const warperStyle = {
    width: tools.toCSSValue(width),
  };
  return (
    <div {...others}>
      <div className={prefixTo('aside__warper')} style={warperStyle}>
        {children}
      </div>
    </div>
  );
}

export default withIExpandPredefined(Aside);
