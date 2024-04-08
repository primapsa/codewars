const SeriesSum = (n) => {
    if(!n) return '0.00'
    let delimeter = 4;
    let sum = 1;
    for(let i = 1; i <= n; i++){
        if(i === 1){
           continue
        }
        else {
            sum += 1/delimeter
        }
        delimeter += 3
    }
    return sum.toFixed(2)
}
