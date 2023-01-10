const wordCounter = require('./wordCounter.js');

const testCases = [{
  input: "Mary has a little lamb",
  stopWords: [],
  expected: 5,
}, {
  input: "",
  stopWords: [],
  expected: 0,
}, {
  input: "Hello, there! General! \n Is there anything else.",
  stopWords: [],
  expected: 7,
}, {
  input: "     ",
  stopWords: [],
  expected: 0,
}, {
  input: "Mary has a little lamb",
  stopWords: ["has", "little"],
  expected: 3,
}, {
  input: "Mary has a little lamb",
  stopWords: ["HaS", "LiTTle"],
  expected: 3,
}]

describe('wordCount()', () => {
  test.each(testCases)('shoud get $expected words from "$input" (stopWords: $stopWords)', ({ input, stopWords, expected }) => {
    expect(wordCounter(input, stopWords)).toBe(expected)
  });
});



