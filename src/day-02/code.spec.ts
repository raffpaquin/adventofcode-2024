import {
  type Input,
  getInputs,
  findSolutionToProblemOne,
  findSolutionToProblemTwo,
} from './code';

describe('Day 2', () => {
  describe('get the inputs', () => {
    test('list should each have 1000 items', async () => {
      const input = await getInputs();

      expect(input.length).toBe(1000);
      expect(input[0].length).toBe(6);
      expect(input[999].length).toBe(8);
    });
  });

  describe('problem  1', () => {
    test('test with supplied input', () => {
      const input: Input = [
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9],
      ];
      expect(findSolutionToProblemOne(input)).toBe(2);
    });

    test('test with dynamic input', async () => {
      const input = await getInputs();
      expect(findSolutionToProblemOne(input)).toBe(483);
    });
  });

  describe('problem  2', () => {
    test('test with supplied input', () => {
      const input: Input = [
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9],
      ];
      expect(findSolutionToProblemTwo(input)).toBe(4);
    });

    test('test with dynamic input', async () => {
      const input = await getInputs();
      expect(findSolutionToProblemTwo(input)).toBe(22014209);
    });
  });
});
