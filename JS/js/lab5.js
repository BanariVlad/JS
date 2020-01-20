
const wordsNumber = (string) => string.split(' ').length;

const findLongestWord = (string) => {
  return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};