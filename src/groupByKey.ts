type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends GroupsMap>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const accum: GroupsMap<T> = {};

  for (const item of items) {
    const value: string = item[key];

    if (!accum[value]) {
      accum[value] = [];
    }

    accum[value].push(item);
  }

  return accum;
}
