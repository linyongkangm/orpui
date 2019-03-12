import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import Icon from '$component/Icon';
import { addClassName as aCN, isString } from '$tools';

import './style.scss';
export enum Design {
  primary = 'primary',
  danger = 'danger'
}

export enum Size {
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export enum Shape {
  circle = 'circle',
  rect = 'rect'
}

export interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  design?: Design;
  size?: Size;
  shape?: Shape;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  icon?: string;
}

function Button(props: IProps = {}) {
  const {
    design,
    size = Size.medium,
    shape,
    disabled = false,
    block = false,
    loading = false,

    icon = '',
    onClick,
    children = '按钮',
    className = '',
    ...others
  } = props;

  let realClassName = className;
  if (size) realClassName = aCN(realClassName, prefixTo(`button__${size}`));
  if (shape) realClassName = aCN(realClassName, prefixTo(`button__${shape}`));
  if (design) realClassName = aCN(realClassName, prefixTo(`button__${design}`));
  if (disabled) realClassName = aCN(realClassName, prefixTo(`button__disabled`));
  if (block) realClassName = aCN(realClassName, prefixTo(`button__block`));
  console.log();
  return (
    <button
      className={realClassName}
      onClick={(e) => !disabled && !loading && onClick && onClick(e)}
      {...others}>
      {
        loading ? <Icon design='circle-o-notch' spin={true}></Icon> : ''
      }
      {
        isString(children) ? <span>{children}</span> : children
      }
    </button>
  );
}

export default withPredefined(Button);
