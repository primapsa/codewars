
const solve = (s) => {
    const upperCount = [...s].reduce((acc,e) => e === e.toUpperCase() ? acc + 1 : acc, 0);
    return upperCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
