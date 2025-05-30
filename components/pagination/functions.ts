// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
export function paginationCal(currentPage: number, totalPage: number) {
  const current = currentPage;
  const last = totalPage;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range: number[] = [];
  const rangeWithDots: (string | number)[] = [];

  let l: number | undefined = undefined;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}
