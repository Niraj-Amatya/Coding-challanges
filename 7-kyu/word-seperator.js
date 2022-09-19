// gets an array of word
// and splits each word into two halfs and saves them in seperate array and shuffle those array words.

const arr = ['beautiful', 'cheerful', 'danger', 'haterfasdfasd', 'man', ''];

const splitWord = (wordSplitter, arr) => {
  return arr
    .filter((e) => e)
    .map((word) => {
      return wordSplitter(word);
    });
};

// Splitter
const split1 = (word) => {
  if (word.length === 3) {
    return word.split('').slice(0, 2).join('');
  }

  return word.split('').slice(0, 4).join('');
};

const split2 = (word) => {
  if (word.length === 3) {
    return word.split('').slice(2, word.length).join('');
  }
  return word.split('').slice(4, word.length).join('');
};

const wordArr1 = splitWord(split1, arr);
const wordArr2 = splitWord(split2, arr);

const shuffle = (arr) => {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
};

const shuffle1 = shuffle(wordArr1);
const shuffle2 = shuffle(wordArr2);

console.log(shuffle1, shuffle2);
