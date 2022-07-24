// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// factorialize(5) should return a number.
// Passed:factorialize(5) should return 120.
// Passed:factorialize(10) should return 3628800.
// Passed:factorialize(20) should return 2432902008176640000.
// Passed:factorialize(0) should return 1

// Solution //////////

function factorialize(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(
  factorialize(5),
  factorialize(10),
  factorialize(20),
  factorialize(0)
);
