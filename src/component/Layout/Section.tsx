import withPredefined from '$widget/withPredefined';
import * as React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

function Section(props: IProps = {}) {
  const {
    children,
    ...others
  } = props;
  return (
    <div {...others}>{children}</div>
  );
}

export default withPredefined(Section, {
  className: Section.name
});
