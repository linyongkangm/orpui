import { IFunctionalRender } from '$src/types';
import * as React from 'react';
const { useState } = React;

interface IProps {
  await: Promise<any>;
  children?: JSX.Element;
  then?: IFunctionalRender<any> | JSX.Element;
  catch?: IFunctionalRender<any> | JSX.Element;
}

function KPromise(props: IProps) {
  const [Target, setTarget] = useState(props.children);
  props.await.then((response) => {
    if (props.then) {
      if (typeof props.then === 'function') {
        setTarget(props.then(response));
      } else {
        setTarget(props.then);
      }
    }
  }).catch((reason) => {
    if (typeof props.then === 'function') {
      setTarget(props.then(reason));
    } else {
      setTarget(props.catch);
    }
  });

  return (
    <>
      {Target}
    </>
  );
}

export default KPromise;
