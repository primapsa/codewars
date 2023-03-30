



const whoWon = (players, extraCard, extraTakers) => {

    for(let key in players){
        const sum = players[key].split(', ').reduce((acc, e) => acc + (Number.isInteger(+e) ? +e : 10), 0)
        players[key] = sum;
    }
   extraTakers.forEach( name => players[name] += Number.isInteger(extraCard) ? extraCard : 10);
    const compare = (a,b) => {

        if(a[1] > 21) return 1;
        if(b[1] > 21) return -1;
        if(a[1] == b[1]) return a[0] < b[0] ? -1 : 1
        if( a[1] > b[1]) return -1
        if (a[1] < b[1]) return 1

    }

    return  Object.entries(players).sort(compare)
}
