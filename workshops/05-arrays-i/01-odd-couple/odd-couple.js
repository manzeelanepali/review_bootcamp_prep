// YOUR CODE BELOW
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []

function oddCouple(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    // if (currValue % 2 === 0) {
    //   return result;
    // } else
    if (currValue % 2 === 1) {
      result.push(currValue);
    }
    if (result.length === 2) {
      break;
    }
  }
  return result;
}
