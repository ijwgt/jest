import {calculateTotal} from '../calculate';
import sortPlayers from '../game';

test('basic test', () => {
	const result = 4;
	expect(result).toBe(4);
});

test('calculateTotal sum', () => {
	const list = [
		{
			id: 456,
			name: 'Война и мир',
			count: 3,
			price: 400
		},
		{
			id: 77,
			name: 'JavaScript',
			count: 1,
			price: 1300
		}
	]
	const result = calculateTotal(list);
	expect(result).toBe(2500);
})



test('checking player sorting', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = sortPlayers(players);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(expected);
});