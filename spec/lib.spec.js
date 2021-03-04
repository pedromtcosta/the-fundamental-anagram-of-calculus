const anagramBuilder = require('../lib/anagram-builder')
const chai = require('chai')

const { expect } = chai

describe('Anagram Builder', () => {
  it('should throw when input is not a string', () => {
    expect(anagramBuilder.newtonsAnagram.bind(anagramBuilder, 1)).to.throw('expected input to be of type "string"')
  })

  describe('should throw if input is not provided', () => {
    it('when input is null', () => {
      expect(anagramBuilder.newtonsAnagram.bind(anagramBuilder, null)).to.throw('required parameter "input" not provided')
    })

    it('when input is null', () => {
      expect(anagramBuilder.newtonsAnagram.bind(anagramBuilder, undefined)).to.throw('required parameter "input" not provided')
    })
  })

  it('should create anagram with ordered input', () => {
    expect(anagramBuilder.newtonsAnagram('aaabbbbccd')).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram('aaabbbbccd', true)).to.equal('a3b4ccd')
  })

  it('should create anagram with unordered input', () => {
    expect(anagramBuilder.newtonsAnagram('bacdacbbab')).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram('bacdacbbab', true)).to.equal('a3b4ccd')
  })

  it('should create anagram with input with mixed cases', () => {
    expect(anagramBuilder.newtonsAnagram('bacDacbbAb')).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram('bacDacbbAb', true)).to.equal('a3b4ccd')
  })

  it('should create anagram with input with spaces', () => {
    expect(anagramBuilder.newtonsAnagram('bacd acbba b')).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram('bacd acbba b', true)).to.equal('a3b4ccd')
  })

  it('should create anagram with input with commas and dots', () => {
    expect(anagramBuilder.newtonsAnagram('bacd.acbba,b')).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram('bacd.acbba,b', true)).to.equal('a3b4ccd')
  })

  it('should create anagram with input with new lines', () => {
    const input = `aaabb

    bbccd`
    expect(anagramBuilder.newtonsAnagram(input)).to.equal('3a4bccd')
    expect(anagramBuilder.newtonsAnagram(input, true)).to.equal('a3b4ccd')
  })

  it('should create anagram with complex input', () => {
    const input = 'Data Æquatione quotcunque fluentes quantitates involvente, fluxiones invenire; et vice versa'
    expect(anagramBuilder.newtonsAnagram(input)).to.equal('6accd13eff7i3l9n4o4qrr4s9t7u5vxæ')
    expect(anagramBuilder.newtonsAnagram(input, true)).to.equal('a6ccde13ffi7l3n9o4q4rrs4t9u7v5xæ')
  })
})