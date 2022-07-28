// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const count = {};
  const result = [];
  const splitText = text.toLowerCase().split('');
  splitText.map((s) => {
    if (count[s]) {
      count[s] = count[s] + 1;
    } else {
      count[s] = 1;
    }
  });

  for (const key in count) {
    if (count[key] > 1) {
      result.push(key);
    }
  }

  return result.length;
}

const allResults = [
  duplicateCount('abcde'),
  duplicateCount('aabbcde'),
  duplicateCount('aabBcde'),
  duplicateCount('Indivisibility'),
  duplicateCount('Indivisibilities'),
];

const output = (result) => {
  result.map((res) => console.log(res));
};

output(allResults);
// console.log(allResults.map((result) => console.log(result)));
