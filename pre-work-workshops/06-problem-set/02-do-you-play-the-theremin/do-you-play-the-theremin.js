// YOUR CODE BELOW
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true
function doYouPlayTheTheremin(string) {
  if (string[0] === "s" || string[0] === "S") {
    return true;
  }

  return false;
}
