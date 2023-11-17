const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 对传入的数组进行随机排序
 * @param list 需要排序的数组
 * @returns 随机排序后的数组
 */
export const getRandomList = <T>(list: T[]) => {
  const n = list.length;
  const swap = (i: number, j: number) => {
    list.splice(j, 1, ...list.splice(i, 1, list[j]));
  };
  for (let i = n - 1; i >= 0; i--) {
    const j = getRandomIntInclusive(0, i);
    swap(i, j);
  }
  return list;
};
