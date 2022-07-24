function findLongestWordLength(str) {
  const result = Math.max(...str.split(' ').map((chars) => chars.length));
  return result;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog'),
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);
