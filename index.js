function reverse(word) { 
  let lettersArray = []
  for (let i=0; i<word.length; i++) { 
    lettersArray.push(word[i])
  }
  lettersArray.reverse()
  return lettersArray.join('')
}

function isPalindrome(word) {
  let reversedWord = reverse(word) //this is a placeholder funcntion for reversing the word 
  if (word === reversedWord) { 
    return true
  } else { 
    return false
  }
}

isPalindrome("abba")

// isPalindrome("robot")

/* 
  Add your pseudocode here
  1. Reverse a word by putting letters into a string and then reversing that string
  2. Join the letters back together
  3. If statement to test if the letters in the array match each other
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
