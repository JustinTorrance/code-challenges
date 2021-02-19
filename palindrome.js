// Create a function to determine whether string is a palindrome:
// a word or phrase that reads the same backward as forward

const isPalendrome = (string) => {
  if (string.length <= 1) {
    console.log(true)
  } else if (string[0] === string[string.length - 1]) {
    const newString = string.slice(1, string.length - 1)
    isPalendrome(newString)
  } else {
    console.log(false)
  }
}

isPalendrome('21racecar12')