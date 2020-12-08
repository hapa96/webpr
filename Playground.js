/* Implement a function named 'palindrome' that tells whether a given string
is the same when read left-to-right and right-to-left, ignoring upper/lowercase differences
and any characters outside 'a' to 'z'. For example
palindrome('ABBA')  // true
palindrome('Abba')  // true
palindrome('A man, a plan, a canal: Panama!') // true

You must use the following helper functions (they are provided):
const str2chars = str  => [...str];            // convert a string to an array of chars
const isAlpha   = char => char.match(/[a-z]/); // char is in the alphabet */


// Lösung
const palindrome = (str) => {
  let input = str2chars(str.toLowerCase());
  arr = input.filter(isAlpha);
  for(let i = 0; i< arr.length;i++){
      if (arr[i] != arr.pop()){
          return false;
      }
  }
  return true;
};






const str2chars = (str) => [...str];
const isAlpha = (char) => char.match(/[a-z]/);

document.writeln(
  palindrome("Amore, Roma!")  &&
    palindrome("Madam, I'm Adam!") &&
    palindrome("Never odd or even.") &&
    ! palindrome("Amore") 
);
