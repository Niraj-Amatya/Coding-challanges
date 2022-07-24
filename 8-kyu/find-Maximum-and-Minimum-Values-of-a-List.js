// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// *****************Solution 1*****************************

var min = function (list) {
  //   assuming the minimum value is the first element in the array
  let result = list[0];
  for (let i = 0; i < list.length; i++) {
    //  checking if the the value of result is bigger then the corresponding number. If true then
    // only assigning the number to the result. For example; if result = 10 and
    // list[i] = 8, that means that 10 > 8 which is true, so we reassign the value of
    //       result to list[i], which is 8.
    if (result > list[i]) {
      result = list[i];
    }
  }
  return result;
};

min([4, 6, 2, 1, 9, 63, -134, 566]);

var max = function (list) {
  let result = list[0];
  for (let i = 0; i < list.length; i++) {
    if (result < list[i]) {
      result = list[i];
    }
  }
  return result;
};

max([-52, 56, 30, 29, -54, 0, -110]);

// *****************Solution 2*****************************

var min = function (list) {
  list.sort((a, b) => a - b);

  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);

  return list[0];
};

// *****************Solution 3*****************************
var min = function (list) {
  // array should be destructured when using with Math.min
  const result = Math.min(...list);
  return result;
};

var max = function (list) {
  const result = Math.max(...list);
  return result;
};
