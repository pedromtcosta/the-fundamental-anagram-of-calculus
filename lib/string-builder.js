/**
 * Provides a simple StringBuilder API.
 * 
 * Used to encapsulate the behavior of appending the char with the appropriate count
 */
class StringBuilder {
  constructor() {
    this.currentValue = ''
  }
  /**
   * Appends a input 1 or 2 times (e.g. 'a' or 'aa') if count < 2,
   * or appends the input followed by the count (e.g. 'a3') or the count followed by the input (e.g. '3a')
   * @param {The character to append} input 
   * @param {How many of the input should be appended} count
   * @param {If the character will come first in case count is greater than 3} charactersFirst 
   */
  append = (input, count, charactersFirst) => {
    if (typeof input !== 'string') throw 'expected input to be a string'
    if (typeof count !== 'number') throw 'expected count to be a number'

    if (count < 3) {
      this.currentValue += input.repeat(count)
    } else {
      this.currentValue += charactersFirst ? `${input}${count}` : `${count}${input}`
    }
  }
  /**
   * Returns the string representation of the builder
   */
  toString = () => this.currentValue
}

module.exports = StringBuilder