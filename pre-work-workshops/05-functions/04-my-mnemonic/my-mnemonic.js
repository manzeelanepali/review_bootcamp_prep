// YOUR CODE BELOW
// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```

function myMnemonic(str1, str2, str3, str4) {
  let str = "";

  if (str1) {
    str = str1[0];
  }
  if (str2) {
    str = str + str2[0];
  }
  if (str3) {
    str = str + str3[0];
  }
  if (str4) {
    str = str + str4[0];
  }
  return str;
}
