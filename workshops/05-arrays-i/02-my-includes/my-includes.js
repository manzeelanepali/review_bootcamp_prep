// YOUR CODE BELOW
function myIncludes(array, searchValue) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    if (currValue === searchValue) {
      return true;
    }
  }
  return result;
}
