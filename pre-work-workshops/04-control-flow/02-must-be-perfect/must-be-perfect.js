let word = "carrots";
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

// YOUR CODE BELOW
// lastWord = "Manjila";
// console.log(lastWord[0]);

if (word.length === 7 && word[0] === "p") {
  lastWord = word.toUpperCase();
} else {
  lastWord = word;
}
