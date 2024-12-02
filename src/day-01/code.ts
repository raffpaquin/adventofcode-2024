const LIST_URL = 'https://adventofcode.com/2024/day/1/input';
const SESSION_ID = process.env.SESSION_ID;

export const getListsFromInputURL = async (): Promise<[number[], number[]]> => {
  const response = await fetch(LIST_URL, {
    headers: { cookie: `session=${SESSION_ID};` },
  });
  const text = await response.text();

  const list1: number[] = [];
  const list2: number[] = [];

  for (const line of text.split('\n')) {
    const [n1, n2] = line.split('   ').map((x) => Number.parseInt(x));

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      continue;
    }
    list1.push(n1);
    list2.push(n2);
  }

  return [list1, list2];
};

export const findAnswer = (list1: number[], list2: number[]): number => {
  const sortedList1 = list1.filter((i) => typeof i === 'number').sort();
  const sortedList2 = list2.filter((i) => typeof i === 'number').sort();

  const distances: number[] = [];
  for (const i in sortedList1) {
    const v1 = sortedList1[i];
    const v2 = sortedList2[i];

    distances.push(Math.abs(v1 - v2));
  }

  return distances.reduce((acc, x) => acc + x, 0);
};
