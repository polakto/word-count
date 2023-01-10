const { readLine, readStopWords } = require('./utils');
const wordCounter = require('./wordCounter');

async function main() {
  const stopWords = await readStopWords();
  const line = await readLine("Enter text: ");
  const numberOfWords = wordCounter(line, stopWords);
  console.log(`Number of words: ${numberOfWords}`)
}

main();
