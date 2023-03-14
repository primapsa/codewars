const reverseWords = (str) => str.split(' ').map( e => [...e].reverse().join('')).join(' ')
