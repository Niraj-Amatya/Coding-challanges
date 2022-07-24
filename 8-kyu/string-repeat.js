// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Solutions/////////////////////////

const repeatString = (num, str) => str.repeat(num);

console.log(
  repeatString(5, '#'),
  repeatString(2, 'ha '),
  repeatString(5, '>'),
  repeatString(10, '!'),
  repeatString(3, 'hello '),
  repeatString(3, '$'),
  repeatString(5, 'a'),
  repeatString(6, 'A'),
  repeatString(7, 'aA')
);
