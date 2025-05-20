import { useCallback, useEffect, useState } from "react";

export type PaginatedResponse<Data, ExtraPayload extends Record<string, unknown>> = {
  data: Data[];
  totalCount: number;
  extra?: ExtraPayload
}

export type PaginationParams = {
  limit: number;
  offset: number;
};

export type UsePaginatedDataProps<Data, ExtraPayload extends Record<string, unknown>> = {
  queryFn: (params: PaginationParams) => Promise<PaginatedResponse<Data, ExtraPayload>>;
  limit?: number;
  initialOffset?: number;
};

export const usePaginatedData = <Data, ExtraPayload extends Record<string, unknown>>(params: UsePaginatedDataProps<Data, ExtraPayload>) => {
  const { queryFn, limit = 10, initialOffset = 0 } = params;
  const [offset, setOffset] = useState(initialOffset);
  const [pages, setPages] = useState<PaginatedResponse<Data, ExtraPayload>[]>([]);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const loadMore = useCallback(async () => {
    setIsFetchingNextPage(true);
    const nextData = await queryFn({
      limit,
      offset,
    });

    setPages(prev => [...prev, nextData]);
    setOffset(offset + limit);
    setIsFetchingNextPage(false);
  }, [queryFn, offset, limit]);

  useEffect(() => {
    loadMore();
  }, []);

  const data = pages.flatMap(page => page.data);
  const extra = pages[0]?.extra || null;
  const totalCount = pages[0]?.totalCount || null;
  const hasNextPage = totalCount !== null && data.length < totalCount;

  return {
    data,
    extra,
    loadMore,
    hasNextPage,
    isFetchingNextPage,
  };
};
