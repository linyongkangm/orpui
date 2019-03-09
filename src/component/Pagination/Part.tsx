import { prefixTo } from '$widget/withPredefined';
import * as React from 'react';
import Item from './Item';
import './style.scss';
import { addClassName } from '$tools';


interface PartProps {
  num: number;
  current?: boolean;
  onClickPart: (prop: { type: string, num: number }) => void;
}

function withPaginationPart<T extends PartProps>(Block: typeof Item, preprops: {
  type: string,
  children: React.JSXElementConstructor<T>
}) {
  const type = preprops.type;
  const Child = preprops.children;
  const prename = prefixTo('pagination' + '__part');
  const className = addClassName(prename, `${prename}_${type}`);
  return (props: T) => {
    const realClassName = addClassName(className, prefixTo(`pagination__part${props.current ? '_current' : ''}`));
    return (
      <Block className={realClassName} onClick={() => props.onClickPart({
        type,
        num: props.num,
      })}>
        <Child {...props}></Child>
      </Block>
    );
  }
}



export const NumberPart = withPaginationPart<PartProps>(Item, {
  type: 'number',
  children: (props) => {
    return <div>{props.num}</div>
  }
});

export const PrevPart = withPaginationPart<PartProps>(Item, {
  type: 'prev',
  children: (props) => {
    return <div>{'<'}</div>
  }
});

export const NextPart = withPaginationPart<PartProps>(Item, {
  type: 'next',
  children: (props) => {
    return <div>{'>'}</div>
  }
});

export const ForwardPart = withPaginationPart<PartProps>(Item, {
  type: 'forward',
  children: (props) => {
    return <div>{'...'}</div>
  }
});

export const BackwardPart = withPaginationPart<PartProps>(Item, {
  type: 'backward',
  children: (props) => {
    return <div>{'...'}</div>
  }
});


const TypePart = {
  number: NumberPart,
  prev: PrevPart,
  next: NextPart,
  forward: ForwardPart,
  backward: BackwardPart,
}

export default function PartFactory(type: 'number' | 'prev' | 'next' | 'forward' | 'backward', props: PartProps) {
  const Part = TypePart[type];
  return <Part {...props} key={type === 'number' ? props.num : type}></Part>
} 