// YOUR CODE BELOW
// maxOfThree(5, 4, 10); // => 10

// maxOfThree(7, 7, 4); // => 7
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
