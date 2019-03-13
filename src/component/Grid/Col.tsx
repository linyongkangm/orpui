import { numberToPercent } from '$tools';
import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';
import { Consumer } from './Context';

interface IBaseProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
}
type Responsive = number | IBaseProps;
interface IColProps extends React.HTMLAttributes<HTMLDivElement>, IBaseProps {
  xs?: Responsive;
  sm?: Responsive;
  md?: Responsive;
  lg?: Responsive;
  xl?: Responsive;
  xxl?: Responsive;
}

function Col(props: IColProps) {
  const maxSpan = 24;
  const {
    children,
    span = 0,
    offset,
    push,
    pull,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    style = {},
    ...others
  } = props;

  const realStyle = Object.assign({
    left: push && numberToPercent(push / maxSpan),
    marginLeft: offset && numberToPercent(offset / maxSpan),
    right: pull && numberToPercent(pull / maxSpan),
    width: span && numberToPercent(span / maxSpan),
  }, style);
  return (
    <Consumer>
      {
        ({ gutter }) => {
          Object.assign(realStyle, {
            paddingLeft: gutter,
            paddingRight: gutter,
          });
          return (
            <div style={realStyle} {...others}>{children}</div>
          );
        }
      }

    </Consumer>

  );
}

export default withPredefined(Col);
