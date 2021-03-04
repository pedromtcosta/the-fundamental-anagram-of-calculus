const StringBuilder = require('./string-builder')

/**
 * Creates an anagram in such a way that the result string will have
 * at most, 2 occurrences of the same character
 * @param {The input for the anagram} input 
 * @param {Boolean indicating if the characters come first on the resulting string} charactersFirst 
 */
const newtonsAnagram = (input, charactersFirst = false) => {
  if (!input) throw 'required parameter "input" not provided'
  if (typeof input !== 'string') throw 'expected input to be of type "string"'

  // first create an array from the input and sort it
  let arr = Array.from(input.toLowerCase()).sort()

  // regex for matching regular and latin characters
  const regex = /^[a-z\u00C0-\u00ff']+$/

  let sb = new StringBuilder()
  let currentCharCount = 0
  let lastChar = ''
  for (let c of arr) {
    // skips the character if it is not a character
    if (!regex.test(c)) continue

    // if the character changed, we can append it to the result
    // as the array is already sorted
    if (lastChar !== c) {
      sb.append(lastChar, currentCharCount, charactersFirst)
      // set the current count to zero so that at the end of the loop
      // we have the correct count for the current char
      currentCharCount = 0
      lastChar = c
    }
    currentCharCount++
  }

  // appends the last character
  sb.append(lastChar, currentCharCount, charactersFirst)

  return sb.toString()
}

module.exports = {
  newtonsAnagram
}