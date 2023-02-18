const uniTotal = (string) => [...string].reduce((acc, e) => acc + e.charCodeAt(), 0);
