type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const accum: GroupsMap<T> = {};

  for (const item of items) {
    const rawValue = item[key];
    const value = rawValue !== null ? String(rawValue) : 'undefined';

    if (!accum[value]) {
      accum[value] = [];
    }

    accum[value].push(item);
  }

  return accum;
}
