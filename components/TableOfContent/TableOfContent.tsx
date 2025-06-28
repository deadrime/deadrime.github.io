"use client";

import { useCallback, useEffect } from 'react';
import styles from './TableOfContent.module.css';
import React from 'react';
import classNames from 'classnames';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';
import { TocItem } from '@/types/article';

const unwrapHeading = (links: TocItem[]) => {
  const result: TocItem[] = [];

  const addLink = (link: TocItem) => {
    result.push(link);
    if (link.children) {
      link.children.forEach(addLink);
    }
  };

  links.forEach(addLink);

  return result;
};

const useActiveHeading = (headings: TocItem[], topOffset = 400) => {
  const [activeHeadingId, setActiveHeading] = React.useState<string>('');

  const handleScroll = useCallback(() => {
    let headingBoxes = unwrapHeading(headings).map(({ id }) => {
      const element = document.getElementById(id)!;
      return { id, box: element?.getBoundingClientRect() };
    });

    headingBoxes = headingBoxes.filter((box) => !!box.box);

    let firstHeadingInViewport = headingBoxes.find(({ box }) => {
      return (
        box.bottom > 0 && box.bottom < topOffset && box.bottom <= window.innerHeight
      );
    });

    if (!firstHeadingInViewport) {
      firstHeadingInViewport = headingBoxes.toReversed().find(({ box }) => {
        return box.bottom < topOffset;
      });
    }

    if (!firstHeadingInViewport) {
      setActiveHeading('');
    } else if (firstHeadingInViewport.id !== activeHeadingId) {
      setActiveHeading(firstHeadingInViewport.id);
    }
  }, [activeHeadingId, headings, topOffset]);

  const throttledHandleScroll = useThrottledCallback(handleScroll, [handleScroll], 100);

  useEffect(() => {
    if (headings.length > 0) {
      handleScroll();
    }
  }, [headings]);

  useEffect(() => {
    if (!headings.length) {
      return;
    }

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll, headings, topOffset]);

  return activeHeadingId;
};

export const TableOfContent: React.FC<{ toc: TocItem[] }> = ({ toc }) => {
  const activeHeadingId = useActiveHeading(toc);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 mb-4">
      <span className='block mb-3 font-semibold text-lg md:text-body2'>СОДЕРЖАНИЕ</span>
      <HeadingList
        items={toc}
        activeHeadingId={activeHeadingId}
        className='[&*>li]:-ml-px [&*>li>*:not(ol)]:pl-3 border-l-1 border-gray-600/50'
      />
    </div>
  );
};

type HeadingListProps = {
  items: TocItem[]
  activeHeadingId: string
  inner?: boolean
  className?: string;
}

const HeadingList: React.FC<HeadingListProps> = ({ items, activeHeadingId, className, inner }) => (
  <ol className={classNames(styles.headingList, 'flex flex-col gap-3', className)}>
    {items.map(i =>
      <li className={classNames('flex flex-col gap-3')} key={i.id}>
        <a href={`#${i.id}`} className={classNames('text-body2 border-l-1 border-transparent', {
          ['text-text']: activeHeadingId !== i.id,
          ['text-primary border-primary!']: activeHeadingId === i.id,
        })}>{i.text}</a>
        {i.children?.length > 0 && <HeadingList items={i.children} activeHeadingId={activeHeadingId} inner={true} />}
      </li>
    )}
  </ol>
);
