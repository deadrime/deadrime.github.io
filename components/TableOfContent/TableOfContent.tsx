import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import classNames from 'classnames';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';
import { motion } from 'motion/react';
import { TocItem } from '@/types/tocItem';

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
  }, [handleScroll, headings]);

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
        className='[&*>li]:-ml-px [&*>li>*:not(ol)]:pl-3'
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

const HeadingList: React.FC<HeadingListProps> = ({ items, activeHeadingId, className, inner }) => {
  const [marker, setMarker] = useState({ top: 0, height: 0});
  const wrapperRef = useRef<HTMLOListElement>(null);

  const updateMarker = useCallback(() => {
    if (!wrapperRef.current) {
      return;
    }

    if (!activeHeadingId) {
      setMarker(({height}) => ({
        top: height / 2,
        height: 0,
      }));
      return;
    }

    const activeLink = wrapperRef.current!.querySelector(`a[href="#${activeHeadingId}"]`);

    if (!activeLink) {
      return;
    }

    const { top } = activeLink.getBoundingClientRect();
    const { top: parentTop } = wrapperRef.current!.getBoundingClientRect();

    setMarker({
      top: top - parentTop,
      height: activeLink.clientHeight,
    });
  }, [activeHeadingId, wrapperRef]);

  useEffect(() => {
    updateMarker();
  }, [updateMarker, activeHeadingId]);

  return (
    <ol ref={wrapperRef} className={classNames('flex flex-col gap-3 relative [&*>li]:-ml-px [&*>li>*:not(ol)]:pl-3 border-l-2 border-gray-200/30 dark:border-gray-600/50', {
      ['border-none ml-3']: inner,
    }, className)}>
      {!inner && (
        <motion.div
          className="absolute w-[2px] left-0 bg-primary rounded-[2px] -translate-x-[2px]"
          animate={{
            top: marker.top,
            height: marker.height,
          }}
          transition={{
            duration: 0.3,
            delay: 0,
            ease: 'easeOut',
          }}
        />
      )}
      {items.map(i =>
        <li className={classNames('flex flex-col gap-3 relative')} key={i.id}>
          <a href={`#${i.id}`} className={classNames('text-body2 border-l-2 border-transparent', {
            ['text-text']: activeHeadingId !== i.id,
            ['text-primary']: activeHeadingId === i.id,
          })}>{i.text}</a>
          {i.children?.length > 0 && <HeadingList inner items={i.children} activeHeadingId={activeHeadingId} />}
        </li>
      )}
    </ol>
  );
};
