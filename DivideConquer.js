const divCon = (x) => x.reduce((acc, e) => typeof e === 'string' ? acc - +e : acc + e, 0)
