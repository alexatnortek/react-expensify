const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should be Dude greeting', () => {
  const greeting = generateGreeting('Dude');
  expect(greeting).toBe('Hello Dude!');
})

test('should add two numbers', () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error (`You added 3 and 4. The result was ${result}. Expect 7.`)
  // }
  expect(result).toBe(7);
})

test('should genereate greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anonymous!');
})