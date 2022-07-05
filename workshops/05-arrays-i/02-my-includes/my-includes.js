// YOUR CODE BELOW
function myIncludes(array, searchValue) {
  debugger;

  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    if (currValue === searchValue) {
      return true;
    }
  }
  return false;
}

myIncludes([1, 2, 7], 3);
