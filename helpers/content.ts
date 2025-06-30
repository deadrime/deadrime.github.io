export const getPaginatedItems = <T>(items: T[], limit: number, offset = 0) => {
  return {
    items: items.slice(offset, limit),
    totalCount: items.length,
  };
};
