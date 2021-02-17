//create a function that accepts a string as a parameter 
//and determines whether the string contains every letter of the alphabet

let alphabet = {
  a:'a',
  b:'b',
  c:'c',
  d:'d',
  e:'e',
  f:'f',
  g:'g',
  h:'h',
  i:'i',
  j:'j',
  k:'k',
  l:'l',
  m:'m',
  n:'n',
  o:'o',
  p:'p',
  q:'q',
  r:'r',
  s:'s',
  t:'t',
  u:'u',
  v:'v',
  w:'w',
  x:'x',
  y:'y',
  z:'z',
}

const pangram1 = "The quick brown fox jumps over the lazy dog"
const pangram2 = 'abcdefghijklmnopqrstuvwxyz'
const notPangram1 = "This is not a pangram."

const validatePangram = (sentence) => {
  let usedLetters = []
  const splitSentence = sentence.split('')
  splitSentence.forEach(letter => {
    if (letter === alphabet[letter] && !usedLetters.includes(letter)) {
      usedLetters.push(letter)
    }
  })
  return usedLetters.length === 26 ? true : false
}

validatePangram(pangram1)