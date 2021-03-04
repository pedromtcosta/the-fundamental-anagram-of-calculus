const compressor = require('../lib/compressor')
const chai = require('chai')

const { expect } = chai

describe('Compressor', () => {
  it('should throw when input is not a string', () => {
    expect(compressor.compress.bind(compressor, 1)).to.throw('expected input of compress to be of type "string"')
  })

  describe('should throw if input is not provided', () => {
    it('when input is null', () => {
      expect(compressor.compress.bind(compressor, null)).to.throw('required parameter "input" not provided')
    })

    it('when input is null', () => {
      expect(compressor.compress.bind(compressor, undefined)).to.throw('required parameter "input" not provided')
    })
  })

  it('should compress ordered input', () => {
    expect(compressor.compress('aaabbbbccd')).to.equal('3a4bccd')
    expect(compressor.compress('aaabbbbccd', true)).to.equal('a3b4ccd')
  })

  it('should compress unordered input', () => {
    expect(compressor.compress('bacdacbbab')).to.equal('3a4bccd')
    expect(compressor.compress('bacdacbbab', true)).to.equal('a3b4ccd')
  })

  it('should compress input with mixed cases', () => {
    expect(compressor.compress('bacDacbbAb')).to.equal('3a4bccd')
    expect(compressor.compress('bacDacbbAb', true)).to.equal('a3b4ccd')
  })

  it('should compress input with spaces', () => {
    expect(compressor.compress('bacd acbba b')).to.equal('3a4bccd')
    expect(compressor.compress('bacd acbba b', true)).to.equal('a3b4ccd')
  })

  it('should compress input with commas and dots', () => {
    expect(compressor.compress('bacd.acbba,b')).to.equal('3a4bccd')
    expect(compressor.compress('bacd.acbba,b', true)).to.equal('a3b4ccd')
  })

  it('should compress input with new lines', () => {
    const input = `aaabb

    bbccd`
    expect(compressor.compress(input)).to.equal('3a4bccd')
    expect(compressor.compress(input, true)).to.equal('a3b4ccd')
  })

  it('should compress complex input', () => {
    const input = 'Data Æquatione quotcunque fluentes quantitates involvente, fluxiones invenire; et vice versa'
    expect(compressor.compress(input)).to.equal('6accd13eff7i3l9n4o4qrr4s9t7u5vxæ')
    expect(compressor.compress(input, true)).to.equal('a6ccde13ffi7l3n9o4q4rrs4t9u7v5xæ')
  })
})