const spinWords = (string) => string.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ')



