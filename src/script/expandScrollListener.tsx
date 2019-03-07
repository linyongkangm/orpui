import { Position } from '$src/types';

interface IExpandScrollEvent extends Event {
  expand: ReturnType<ScrollElement['getExpand']>;
}

class ScrollElement {
  private element: HTMLElement;
  private top: number;
  private bottom: number;
  private left: number;
  private right: number;
  constructor(element: EventTarget) {
    this.element = element === window ? document.documentElement : element as HTMLElement;
    this.refreshOffset();
  }
  public refreshOffset() {
    this.top = this.element.scrollTop;
    this.left = this.element.scrollLeft;
    this.right = this.element.scrollWidth - this.element.scrollLeft - this.element.clientWidth;
    this.bottom = this.element.scrollHeight - this.element.scrollTop - this.element.clientHeight;
  }
  public getDirection() {
    const top = this.element.scrollTop;
    const left = this.element.scrollLeft;
    let direction: 'none' | Position = 'none';
    if (this.top < top) {
      direction = 'bottom';
    } else if (this.top > top) {
      direction = 'top';
    } else if (this.left < left) {
      direction = 'right';
    } else if (this.left > left) {
      direction = 'left';
    }
    return direction;
  }
  public getOffset() {
    return {
      toBottom: this.bottom,
      toLeft: this.left,
      toTop: this.top,
      toRight: this.right,
    };
  }
  public getExpand() {
    const direction = this.getDirection();
    this.refreshOffset();
    const offset = this.getOffset();
    return {
      direction,
      ...offset
    }
  }
}

function expandScrollListener<E extends Event = IExpandScrollEvent>(listener: (evt: E) => void, target?: EventTarget) {
  let scrollElement: ScrollElement = target && new ScrollElement(target);
  return (event: E) => {
    if (!scrollElement) { scrollElement = new ScrollElement(event.srcElement); }
    Object.assign(event, {
      expand: scrollElement.getExpand()
    });
    listener.call(target, event);
  };
}

export default expandScrollListener;