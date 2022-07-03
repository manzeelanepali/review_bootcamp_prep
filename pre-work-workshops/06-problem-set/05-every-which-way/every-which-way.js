// YOUR CODE BELOW
// everyWhichWay(10, 20, 30); // => sum

// everyWhichWay(50, 20, 30); // => difference

// everyWhichWay(4, 4, 16); // => product

// everyWhichWay(100, 10, 10); // => fraction

// everyWhichWay(1, 1000, 50); // => null

function everyWhichWay(num1, num2, num3) {
  if (num1 + num2 === num3) {
    return "sum";
  }
  if (num1 - num2 === num3) {
    return "difference";
  }
  if (num1 * num2 === num3) {
    return "product";
  }
  if (num1 / num2 === num3) {
    return "fraction";
  }
  return null;
}
