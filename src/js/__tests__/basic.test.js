import getHealth from '../app';

test ('health 90', () => {
  const result = getHealth({name: 'Маг', health: 90});

  expect(result).toBe('healthy');
})

test ('health 50', () => {
  const result = getHealth({name: 'Маг', health: 50});

  expect(result).toBe('wounded');
})

test ('health 40', () => {
  const result = getHealth({name: 'Маг', health: 40});

  expect(result).toBe('wounded');
})

test ('health 15', () => {
  const result = getHealth({name: 'Маг', health: 15});

  expect(result).toBe('wounded');
})

test ('health 5', () => {
  const result = getHealth({name: 'Маг', health: 5});

  expect(result).toBe('critical');
})
