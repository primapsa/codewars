const accum = (s) => s.split('').map((elm, index) => `${elm.toUpperCase()}${elm.toLowerCase().repeat(index)}`).join('-')
