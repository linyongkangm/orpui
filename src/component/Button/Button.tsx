import * as React from 'react';
import { withPredefined, prefixTo } from '$widget/withPredefined';
import Icon, { IIconProps } from '$component/Icon';
import { addClassName as aCN, isString } from '$tools';
import { Design, Size, Shape } from './enum';
import './style.scss';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  design?: Design;
  size?: Size;
  shape?: Shape;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  icon?: React.ReactElement<IIconProps, typeof Icon>;
}

function Button(props: IButtonProps) {
  const {
    design,
    size = Size.medium,
    shape,
    disabled = false,
    block = false,
    loading = false,
    icon = '',

    onClick,
    children = 'Button',
    className = '',
    ...others
  } = props;

  let realClassName = className;
  if (size) realClassName = aCN(realClassName, prefixTo(`button__${size}`));
  if (shape) realClassName = aCN(realClassName, prefixTo(`button__${shape}`));
  if (design) realClassName = aCN(realClassName, prefixTo(`button__${design}`));
  if (disabled) realClassName = aCN(realClassName, prefixTo(`button__disabled`));
  if (block) realClassName = aCN(realClassName, prefixTo(`button__block`));

  let realIcon = icon;
  if (loading) realIcon = <Icon design='circle-o-notch' spin={true}></Icon>;

  let realChildren = isString(children) ? <span>{children}</span> : children;

  return (
    <button
      className={realClassName}
      onClick={(e) => !disabled && !loading && onClick && onClick(e)}
      {...others}>
      {
        realIcon
      }
      {
        realChildren
      }
    </button>
  );
}

export default withPredefined(Button);
