import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';
import { addClassName } from '$tools';
import { Filp } from './enum';

export interface IIconProps {
  className?: string;
  design: string;
  spin?: boolean;
  rotate?: 90 | 180 | 270;
  flip?: Filp;
}

function Icon(props: IIconProps) {
  const {
    design,
    spin = false,
    rotate,
    flip,
    className,
    ...others
  } = props;
  let realClassName = addClassName(className, `fa fa-${design}`);
  if (spin) realClassName = addClassName(realClassName, 'fa-spin');
  if (rotate) realClassName = addClassName(realClassName, `fa-rotate-${rotate}`);
  if (flip) realClassName = addClassName(realClassName, `fa-flip-${flip}`);
  return (
    <i className={realClassName} {...others}></i>
  );
}

export default withPredefined(Icon);
