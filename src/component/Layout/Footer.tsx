import { prefixTo, withIExpandPredefined } from '$widget/withPredefined';
import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

function Footer(props: IProps = {}) {
  const {
    children,
    ...others
  } = props;
  return (
    <div {...others}>
      <div className={prefixTo('footer__warper')}>
        {children}
      </div>
    </div>
  );
}

export default withIExpandPredefined(Footer);
