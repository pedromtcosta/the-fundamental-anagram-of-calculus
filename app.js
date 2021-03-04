const yargs = require('yargs')
const anagramBuilder = require('./lib/anagram-builder')

const argv = yargs
  .option('input', {
    alias: 'i',
    description: 'The input for the anagram creation',
    type: 'string',
  })
  .option('charsFirst', {
    description: 'Defines if the characters will come first on the resulting string',
    default: false,
    type: 'boolean',
    boolean: true
  })
  .demandOption('input', 'Please provide an input to create the anagram')
  .help()
  .alias('help','h')
  .argv

const anagram = anagramBuilder.newtonsAnagram(argv.input, argv.charsFirst)

console.log(anagram)