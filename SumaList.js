const sumNoDuplicates = (numList) => {
    const obj = {};
    numList.forEach(e => {
        obj[e] = obj[e] + 1 || 0
    })
    let sum = 0;
    for (key in obj){
        if(!obj[key]){
            sum += +key
        }
    }
    return sum;
}
