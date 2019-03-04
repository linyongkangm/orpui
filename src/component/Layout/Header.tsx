import withPredefined, { prefixTo } from '$widget/withPredefined';
import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

function Header(props: IProps = {}) {
  const {
    children,
    ...others
  } = props;
  return (
    <div {...others}>
      <div className={prefixTo('header__warper')}>
        {children}
      </div>
    </div>
  );
}

export default withPredefined(Header, {
  className: 'header'
});
