export const calculateLinesToHighlight = (linesStr = '') => {
  if (!linesStr) {
    return []
  }

  const lines = linesStr.trim().replace(' ', '').split(',');

  if (!lines) {
    return []
  }

  const result = lines.reduce((acc, curr) => {
    if (curr.includes('-')) {
      const [low, high] = curr.split('-').map(Number);

      for (let i = Number(low); i <= +high; i++) {
        acc.push(i);
      }
    } else {
      acc.push(Number(curr));
    }

    return acc;
  }, [] as number[]);

  return result;
};
