const template = {9:3, 8: 2, 7: 1, 1: 7,2: 8, 3: 9};
const computerToPhone = (numbers) =>[...numbers].map(e => template[e] ? template[e] : e).join('');

