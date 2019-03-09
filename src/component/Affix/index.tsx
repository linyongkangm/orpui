import { withPredefined, prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import expandScrollListener from '$src/script/expandScrollListener';
import * as tools from '$tools';
import './style.scss';

const { useEffect, useState, useRef } = React;
const { addClassName, outerPositions, toCSSValue } = tools;
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  offsetBottom?: number;
  offsetTop?: number;
  offsetLeft?: number;
  offsetRight?: number;
  target?: EventTarget & HTMLElement;
  onChangeSet?: ReturnType<typeof expandScrollListener>;
  along?: boolean;
}

function Affix(props: IProps) {
  const {
    children,
    offsetBottom = 0,
    offsetTop = 0,
    offsetLeft = 0,
    offsetRight = 0,
    target = window,
    className,
    onChangeSet,
    along = false,
    ...others
  } = props;
  const affix = useRef<HTMLDivElement>();
  const [realClassName, setRealClassName] = useState(className);

  function getClientRect() {
    const baseRect = target == window ?
      new DOMRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight) :
      (target as HTMLElement).getBoundingClientRect() as DOMRect;
    return new DOMRect(
      baseRect.x + offsetLeft,
      baseRect.y + offsetTop,
      baseRect.width - offsetRight - offsetLeft,
      baseRect.height - offsetBottom - offsetTop);
  }

  useEffect(() => {
    let nowClassname = realClassName;
    const boundClientRect = getClientRect();
    const scrollListener = function (event: Event) {
      const rect = affix.current.getBoundingClientRect();
      const positions = outerPositions(boundClientRect, rect);
      let newClassname = prefixTo(Affix.name.toLowerCase());
      if (positions !== null) {
        newClassname = addClassName(newClassname, positions.map(position => prefixTo(`affix_solid-${position}`)).join(' '));
      }
      if (newClassname != nowClassname) {
        onChangeSet && onChangeSet(event);
        nowClassname = newClassname
        setRealClassName(nowClassname);
      }
    };
    scrollListener(new Event('scroll'));
    target.addEventListener('scroll', scrollListener);
    return () => {
      target.removeEventListener('scroll', scrollListener);
    };
  }, [target]);

  let fixedStyle: React.CSSProperties = {};
  if (className !== realClassName) {
    fixedStyle = {
      width: toCSSValue(affix.current.clientWidth),
      height: toCSSValue(affix.current.clientHeight),
    }
  }
  return (
    <div className={prefixTo('affix__placeholder')} ref={affix} style={fixedStyle}>
      <div className={addClassName(realClassName, prefixTo('affix__content'))} {...others} style={Object.assign({}, fixedStyle, others.style)}>
        {children}
      </div>
    </div>
  );
}




export default withPredefined(Affix);
