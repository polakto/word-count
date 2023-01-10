const { readLine } = require('./utils');
const wordCounter = require('./wordCounter');

async function main() {
  const line = await readLine("Enter text: ");
  const numberOfWords = wordCounter(line);
  console.log(`Number of words: ${numberOfWords}`)
}

main();
