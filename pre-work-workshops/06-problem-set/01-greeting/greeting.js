// YOUR CODE BELOW
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!

function greeting(name) {
  if (name === undefined) {
    return "Hello!";
  } else {
    return `Hello ${name}!`;
  }
}
