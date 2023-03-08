const vowelOne =(s) => [...s].map(e => /[euioa]/i.test(e) ? 1 : 0).join('');

