const regex = /[a-z]+/gi;

function wordCounter(input, stopWords = []) {
  const sanitizedStopWords = stopWords.map(i => i.toLowerCase());
  const nonoWords = new Set(sanitizedStopWords);
  const words = input.match(regex) || [];

  const correctWords = words.filter(i => !nonoWords.has(i))

  return correctWords.length;
}

module.exports = wordCounter;