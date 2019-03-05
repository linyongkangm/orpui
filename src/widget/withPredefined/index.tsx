import Config from '$src/config';
import * as tools from '$tools';
import * as React from 'react';

const prefixTo = tools.withPrefix(Config.prefix);
interface IPreprops {
  className?: string | string[];
}

// tslint:disable-next-line:max-line-length
function withPredefined<P>(Component: React.JSXElementConstructor<P>, preprops: IPreprops = {}): typeof Component {
  const { className: cs = [] } = preprops;
  // tslint:disable-next-line:max-line-length
  const preclassNames = (Array.isArray(cs) ? cs : [cs]).concat(Component.name).map((name) => prefixTo(name.toLowerCase()));

  return new Proxy(Component, {
    apply(Target, ctx, args: [P]) {
      const props = args[0];
      const {
        className,
        ...others
      } = props as IPreprops;
      const realClassName = tools.addClassName(preclassNames, className as string).join(' ');
      return <Target className={realClassName} {...(others as any)}></Target>;
    }
  });
}

interface IExpand<P> {
  isInstance: (element: React.ReactElement) => element is React.ReactElement<P, React.JSXElementConstructor<P>>;
}

function withIExpandPredefined<P>(Component: React.JSXElementConstructor<P>, preprops: IPreprops = {}) {
  const Real: typeof Component & IExpand<P> = (withPredefined(Component, preprops) as any);
  Real.isInstance = (element): element is React.ReactElement<P, typeof Component> => element.type === Real;
  return Real;
}

export {
  prefixTo,
  withIExpandPredefined,
  withPredefined
};
