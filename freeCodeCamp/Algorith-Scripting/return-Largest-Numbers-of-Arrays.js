// Return Largest Numbers of Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [1000, 1001, 857, 1]

// Solution

function largestOfFour(arr) {
  const result = [];
  let largest = 0;
  arr.forEach((inArray) => {
    result.push(Math.max(...inArray));
  });

  const max = Math.max(...result);
  const index = result.indexOf(max);
  console.log(arr[index]);
}

largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
