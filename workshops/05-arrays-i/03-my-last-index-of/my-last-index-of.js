// YOUR CODE BELOW
// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// ```javascript
// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// ```

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the
// value.

// ```javascript
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// ```
function myLastIndexOf(array, searchValue) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    if (searchValue === currValue) {
      return searchValue[i];
    }
  }
  return result;
}
