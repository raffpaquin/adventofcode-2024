import {
  type Input,
  getInputs,
  findSolutionToProblemOne,
  findSolutionToProblemTwo,
} from './code';

describe('Day 1', () => {
  describe('get the inputs', () => {
    test('list should each have 1000 items', async () => {
      const [list1, list2] = await getInputs();

      expect(list1.length).toBe(1000);
      expect(list2.length).toBe(1000);
    });
  });

  describe('problem  1', () => {
    test('test with supplied input', () => {
      const input: Input = [
        [3, 4, 2, 1, 3, 3],
        [4, 3, 5, 3, 9, 3],
      ];
      expect(findSolutionToProblemOne(input)).toBe(11);
    });

    test('test with dynamic input', async () => {
      const input = await getInputs();
      expect(findSolutionToProblemOne(input)).toBe(1938424);
    });
  });

  describe('problem  2', () => {
    test('test with supplied input', () => {
      const input: Input = [
        [3, 4, 2, 1, 3, 3],
        [4, 3, 5, 3, 9, 3],
      ];
      expect(findSolutionToProblemTwo(input)).toBe(31);
    });

    test('test with dynamic input', async () => {
      const input = await getInputs();
      expect(findSolutionToProblemTwo(input)).toBe(22014209);
    });
  });
});
