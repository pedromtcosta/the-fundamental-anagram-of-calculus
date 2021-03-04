# The Fundamental Anagram of Calculus

This is a node.js application which creates anagrams based on the same idea found in a [letter that Newton wrote to Leibniz](https://www.mathpages.com/home/kmath414/kmath414.htm).

The idea is to basically sort the characters in the original message in alphabetical order and then replace any sequence of 3 or more identical characters with the number of times the character repeats and the character itself:
- aaabbbbccd becomes 3a4bccd
- bbbbaaaccd also becomes 3a4bccd
- bacdacbbab becomes 3a4bccd as well

### How to execute

Make sure you restore the necessary packages:

```
npm install
```

And then you can run it like this:

```
node app.js -i aaabbbbccd
> outputs 3a4bccd
```

You can also use the --charsFirst option to switch the number / character order to character / number:

```
node app.js -i aaabbbbccd --charsFirst
> outputs a3b4ccd
```
