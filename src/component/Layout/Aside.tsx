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
interface IRealAside extends TypeAside {
  isAside: (element: React.ReactElement) => element is React.ReactElement<IProps, typeof Aside>;
}

function getRealAside(): IRealAside {
  const RealAside = (withPredefined(Aside, {
    className: 'aside'
  }) as IRealAside);
  RealAside.isAside = (element): element is React.ReactElement<IProps, typeof Aside> => element.type === RealAside;
  return RealAside;
}

export default getRealAside();
