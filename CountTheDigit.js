const nbDig = (n, d) => new Array(n+1).fill(n).map((_,i) => i**2).reduce((acc,e) => acc += String(e).split(d).length-1, 0)
