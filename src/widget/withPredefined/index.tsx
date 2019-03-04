import Config from '$src/config';
import * as tools from '$tools';
import * as React from 'react';

const prefixTo = tools.withPrefix(Config.prefix);

interface IPreprops {
  className?: string | string[];
}
// tslint:disable-next-line:max-line-length
type WithPredefined = <P>(Component: React.JSXElementConstructor<P>, preprops: IPreprops) => typeof Component;
const withPredefined: WithPredefined = (Component, preprops) => {
  const { className: cs = [] } = preprops;
  const preclassNames = (Array.isArray(cs) ? cs : [cs]).map((name) => prefixTo(name.toLowerCase()));
  return (props: IPreprops) => {
    const {
      className,
      ...others
    } = props;
    return <Component className={preclassNames.concat(className).join(' ')} {...(others as any)}></Component>;
  };
};

export default withPredefined;
export {
  prefixTo,
};
