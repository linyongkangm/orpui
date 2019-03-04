import * as tools from '$tools';
import { prefixTo, withIExpandPredefined } from '$widget/withPredefined';
import * as React from 'react';
import Aside from './Aside';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'block' | 'flex';
}

function Layout(props: IProps = {}) {
  const {
    children,
    mode,
    className,
    ...others
  } = props;

  const realClassName = tools.addClassName(className, mode && prefixTo(`layout_${mode}`));
  let warperStyle: React.CSSProperties = {};
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (React.isValidElement(child) && Aside.isInstance(child)) {
        warperStyle = Object.assign({
          paddingLeft: tools.toCSSValue(child.props.width),
        }, warperStyle);
      }
    });
  }

  return (
    <div className={realClassName}  {...others}>
      <div className={prefixTo('layout__warper')} style={warperStyle}>
        {children}
      </div>
    </div>
  );
}

export default withIExpandPredefined(Layout);
