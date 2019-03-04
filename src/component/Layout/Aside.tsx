import * as tools from '$tools';
import withPredefined, { prefixTo } from '$widget/withPredefined';
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

type TypeAside = typeof Aside;
interface IReal extends TypeAside {
  // tslint:disable-next-line:max-line-length
  isInstance: (element: React.ReactElement) => element is React.ReactElement<IProps, React.JSXElementConstructor<IProps>>;
}

function getReal<P, R>(Component: React.JSXElementConstructor<P>): IReal {
  const Real = (withPredefined(Component, {
    className: Component.name
  }) as IReal);
  // tslint:disable-next-line:max-line-length
  Real.isInstance = (element): element is React.ReactElement<P, typeof Component> => element.type === Component;
  return Real;
}

export default getReal(Aside);
