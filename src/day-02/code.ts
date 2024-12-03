const INPUT_URL = 'https://adventofcode.com/2024/day/2/input';
const SESSION_ID = process.env.SESSION_ID;

export type Input = number[][];
type ReportResult = 'safe' | 'unsafe';
type Direction = 'increase' | 'decrease';

export const getInputs = async (): Promise<Input> => {
  const response = await fetch(INPUT_URL, {
    headers: { cookie: `session=${SESSION_ID};` },
  });
  const text = await response.text();

  const input: number[][] = [];

  for (const line of text.split('\n')) {
    if (line.length > 0) {
      input.push(line.split(' ').map((x) => Number.parseInt(x)));
    }
  }

  return input;
};

export const findSolutionToProblemOne = (input: Input): number => {
  const reports: ReportResult[] = [];

  for (const row of input) {
    let isSafe = true;
    let direction: Direction;

    for (const [i, value] of row.entries()) {
      if (i === 0) {
        continue;
      }

      if (i === 1) {
        direction = value > row[i - 1] ? 'increase' : 'decrease';
      }

      const diff = value - row[i - 1];

      switch (direction) {
        case 'increase':
          if (diff < 1 || diff > 3) {
            isSafe = false;
          }
          break;
        case 'decrease':
          if (diff < -3 || diff > -1) {
            isSafe = false;
          }
          break;
      }
    }

    reports.push(isSafe ? 'safe' : 'unsafe');
  }

  return reports.filter((r) => r === 'safe').length;
};

export const findSolutionToProblemTwo = (input: Input): number => {
  throw new Error('Not implemented');
};
