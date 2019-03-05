import * as React from 'react';
const { useState, useEffect } = React;

interface IProps<P> {
  await: Promise<P>;
  children?: React.ReactNode;
  then?: React.JSXElementConstructor<P> | JSX.Element;
  catch?: React.JSXElementConstructor<any> | JSX.Element;
}

function KPromise<P extends object>(props: IProps<P>) {
  const [target, setTarget] = useState(props.children);
  if (target === props.children) {
    props.await.then((response) => {
      return (
        props.then && typeof props.then === 'function' ? <props.then {...response}></props.then> : props.then
      );
    }).catch((reason) => {
      return (
        props.catch && typeof props.catch === 'function' ? <props.catch {...reason}></props.catch> : props.catch
      );
    }).then((component) => {
      setTarget(component);
    });
  }
  return (
    <>
      {target}
    </>
  );
}

export default KPromise;
