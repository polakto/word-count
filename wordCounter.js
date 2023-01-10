const regex = /[a-z]+/gi;

function wordCounter(input) {
  var count = (input.match(regex) || []).length;
  return count;
}

module.exports = wordCounter;