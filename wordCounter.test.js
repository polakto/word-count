const wordCounter = require('./wordCounter.js');

const testCases = [{
  input: "Mary has a little lamb",
  expected: 5,
}, {
  input: "",
  expected: 0,
}, {
  input: "Hello, there! General! \n Is there anything else.",
  expected: 7,
}, {
  input: "     ",
  expected: 0,
}]

describe('wordCount()', () => {
  test.each(testCases)('shoud get $expected words from "$input"', ({ input, expected }) => {
    expect(wordCounter(input)).toBe(expected)
  });
});



