// YOUR CODE BELOW
// lastCharacter('apples', 'pumpkins'); // => true

// lastCharacter('marker', 'pen'); // => false
function lastCharacter(str1, str2) {
  if (str1[str1.length - 1] === str2[str2.length - 1]) {
    return true;
  }

  return false;
}
