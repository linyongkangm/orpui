import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import Icon from '$component/Icon';
import { addClassName as aCN } from '$tools';

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
  if (loading) realClassName = aCN(realClassName, prefixTo(`button__loading`));
  return (
    <Icon design='circle-o-notch' spin={false}></Icon>
  );
}

export default withPredefined(Button);
