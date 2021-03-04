const { boolean } = require('yargs')
const yargs = require('yargs')
const compressor = require('./lib/compressor')

const argv = yargs
  .option('input', {
    alias: 'i',
    description: 'The input to be compressed',
    type: 'string',
  })
  .option('charsFirst', {
    description: 'Defines if the characters will come first on the compressed string',
    default: false,
    type: 'boolean',
    boolean: true
  })
  .demandOption('input', 'Please provide an input to compress')
  .help()
  .alias('help','h')
  .argv

const compressed = compressor.compress(argv.input, argv.charsFirst)

console.log(compressed)