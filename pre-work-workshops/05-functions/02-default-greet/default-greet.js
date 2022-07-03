// YOUR CODE BELOW
// should return a string greeting for the given names. If the user
// does not define a last name, assume the last name is 'Doe'.
// defaultGreet('Chaka', 'Khan'); // => 'Hi Chaka Khan!'
// defaultGreet('John'); // => 'Hi John Doe!'

function defaultGreet(firstname, lastname) {
  if (lastname === undefined) {
    lastname = "Doe";
  }
  return `Hi ${firstname} ${lastname}!`;
}
