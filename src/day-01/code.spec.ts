import { getListsFromInputURL, findAnswer } from './code';

describe('should get the two lists from the input url', () => {
  test('list should each have 1000 items', async () => {
    const [list1, list2] = await getListsFromInputURL();

    expect(list1.length).toBe(1000);
    expect(list2.length).toBe(1000);
  });
});

describe('should find  the solution', () => {
  test('test with supplied input', () => {
    const [list1, list2] = [
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3],
    ];
    expect(findAnswer(list1, list2)).toBe(11);
  });

  test('test with dynamic input', async () => {
    const [list1, list2] = await getListsFromInputURL();
    expect(findAnswer(list1, list2)).toBe(1938424);
  });
});
