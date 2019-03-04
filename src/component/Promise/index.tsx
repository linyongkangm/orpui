import * as React from 'react';
const { useState } = React;

interface IProps<P> {
  await: Promise<P>;
  children?: JSX.Element;
  then?: React.JSXElementConstructor<P> | JSX.Element;
  catch?: React.JSXElementConstructor<P> | JSX.Element;
}

function KPromise<P>(props: IProps<P>) {
  const [target, setTarget] = useState(props.children);
  props.await.then((response) => {
    if (props.then) {
      if (typeof props.then === 'function') {
        setTarget(<props.then {...response}></props.then>);
      } else {
        setTarget(props.then);
      }
    }
  }).catch((reason) => {
    if (typeof props.catch === 'function') {
      setTarget(<props.catch {...reason}></props.catch>);
    } else {
      setTarget(props.catch);
    }
  });

  return (
    <>
      {target}
    </>
  );
}

export default KPromise;
