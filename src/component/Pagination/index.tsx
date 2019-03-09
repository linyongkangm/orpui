import { withPredefined } from '$widget/withPredefined';
import * as React from 'react';
import Page from './Page';
import PartFactory from './Part';
import './style.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  page: Page;
  interval?: [number, number];
  hasPrev?: boolean;
  hasNext?: boolean;
  hasJump?: boolean;
  hasForward?: boolean;
  hasBackward?: boolean;
  hasTotal?: boolean;
  hasFirst?: boolean;
  hasLast?: boolean;
  onChangePage: (prevPage: Page, currentPage: Page) => void;
}

function Pagination(props: IProps) {
  const {
    children,
    page,
    interval = [-5, 5],
    hasPrev = true,
    hasNext = true,
    hasJump = true,
    hasForward = true,
    hasBackward = true,
    hasTotal = true,
    hasFirst = true,
    hasLast = true,
    onChangePage,
    ...others
  } = props;

  const pageParts: Array<{
    type: 'number' | 'forward' | 'backward' | 'prev' | 'next',
    num: number,
    current?: boolean,
  }> = [];

  const numberPartsLen = interval[1] - interval[0] + 1;
  const numberPart = Array.from({ length: numberPartsLen }, (v, k) => k + interval[0] + page.current)
    .filter((num) => num > page.first && num < page.last)
    .map(num => ({
      type: 'number',
      num,
      current: page.current === num,
    }));

  pageParts.push(...numberPart as any);

  const backwardNum = page.current - numberPartsLen;
  if (hasBackward && numberPart[0].num > page.first + 1) pageParts.unshift({
    type: 'backward',
    num: backwardNum < page.first ? page.first + 1 : backwardNum
  });
  const forwardNum = page.current + numberPartsLen;
  if (hasForward && numberPart[numberPart.length - 1].num < page.last - 1) pageParts.push({
    type: 'forward',
    num: forwardNum > page.last ? page.last - 1 : forwardNum
  });

  if (hasFirst) pageParts.unshift({
    type: 'number',
    num: page.first,
    current: page.current === page.first,
  });
  if (hasLast) pageParts.push({
    type: 'number',
    num: page.last,
    current: page.current === page.last,
  });

  if (hasPrev && page.current > page.first) pageParts.unshift({ type: 'prev', num: page.current - 1 });
  if (hasNext && page.current < page.last) pageParts.push({ type: 'next', num: page.current + 1 });

  return (
    <div {...others}>
      {
        pageParts.map(({ type, ...other }) => PartFactory(type, {
          onClickPart: ({ num }) => {
            const will = new Page(page);
            will.current = num;
            onChangePage(page, will);
          },
          ...other
        }))
      }
    </div>
  );
}

type IFacePagination = typeof Pagination & {
  Page: typeof Page
}

function getFacePagination(): IFacePagination {
  const FacePagination = withPredefined(Pagination) as IFacePagination;
  FacePagination.Page = Page;
  return FacePagination;
}

export default getFacePagination();
