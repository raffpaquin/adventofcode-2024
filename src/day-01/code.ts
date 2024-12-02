const INPUT_URL = 'https://adventofcode.com/2024/day/1/input';
const SESSION_ID = process.env.SESSION_ID;

export type Input = [number[], number[]];

export const getInputs = async (): Promise<Input> => {
  const response = await fetch(INPUT_URL, {
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

export const findSolutionToProblemOne = (input: Input): number => {
  const sortedList1 = input[0].sort();
  const sortedList2 = input[1].sort();

  const distances: number[] = [];
  for (const i in sortedList1) {
    const v1 = sortedList1[i];
    const v2 = sortedList2[i];

    distances.push(Math.abs(v1 - v2));
  }

  return distances.reduce((acc, x) => acc + x, 0);
};

export const findSolutionToProblemTwo = (input: Input): number => {
  const similarities: number[] = [];
  for (const v1 of input[0]) {
    const count = input[1].filter((v2) => v2 === v1).length;
    similarities.push(count * v1);
  }

  return similarities.reduce((acc, x) => acc + x, 0);
};
