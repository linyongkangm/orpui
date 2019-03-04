import * as tools from '$tools';
import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';
import { Provider } from './Context';
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | string;
}

function Row(props: IProps = {}) {
  const {
    children,
    gutter = 0,
    ...others
  } = props;
  const gu = tools.toCSSValue(gutter);
  return (
    <Provider value={{ gutter: gu }}>
      <div {...others}>{children}</div>
    </Provider>

  );
}

export default withPredefined(Row);
