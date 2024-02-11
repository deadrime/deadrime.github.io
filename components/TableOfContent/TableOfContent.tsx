"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import styles from './TableOfContent.module.css';
import React from 'react';
import classNames from 'classnames';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';

type Heading = {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

type HierarchicalHeading = Heading & {
  children: HierarchicalHeading[]
}

const getHierarchicalHeadings = (headings: Heading[]) => {
  const result = headings.reduce<HierarchicalHeading[]>((acc, curr) => {
    if (curr.level === 2) {
      acc.push({
        ...curr,
        children: [],
      });
    } else {
      const parent = acc.toReversed().find(i => i.level < curr.level) as HierarchicalHeading;
      parent.children.push({
        ...curr,
        children: [],
      });
    }

    return acc
  }, [])

  return result;
}

const useActiveHeading = (headings: Heading[], topOffset = 400) => {
  const [activeHeadingId, setActiveHeading] = React.useState<string>('');

  const handleScroll = useCallback(() => {
    let headingBoxes = headings.map(({ id, element }) => {
      return { id, box: element.getBoundingClientRect() };
    });

    headingBoxes = headingBoxes.filter((box) => !!box);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings])

  useEffect(() => {
    if (!headings.length) {
      return
    }

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [activeHeadingId, throttledHandleScroll, headings, topOffset]);

  return activeHeadingId;
};

export const TableOfContent: React.FC<{ contentId: string }> = ({ contentId }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const activeHeadingId = useActiveHeading(headings);

  useLayoutEffect(() => {
    const content = document.getElementById(contentId)

    if (!content) {
      return
    }

    const headings = Array.from(content.querySelectorAll<HTMLElement>("h2, h3, h4"))
      .map((element) => {
        return {
          id: element.id || element.querySelector('a[href]')?.getAttribute('href')?.substring(1) || element.innerText, // TODO: use translit
          text: element.innerText,
          level: Number(element.nodeName.charAt(1)),
          element,
        }
      })
    setHeadings(headings);
  }, [contentId])

  const hierarchicalHeadings = useMemo(() => getHierarchicalHeadings(headings), [headings])

  return (
    <HeadingList items={hierarchicalHeadings} activeHeadingId={activeHeadingId} />
  )
}

const HeadingList: React.FC<{ items: HierarchicalHeading[], activeHeadingId: string }> = ({ items, activeHeadingId }) => (
  <ol className={styles.headingList}>
    {items.map(i =>
      <li key={i.id}>
        <a href={`#${i.id}`} className={classNames({
          ['text-primary']: activeHeadingId === i.id,
        })}>{i.text}</a>
        {i.children?.length > 0 && <HeadingList items={i.children} activeHeadingId={activeHeadingId} />}
      </li>
    )}
  </ol>
)
