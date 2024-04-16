const moveZeros = arr => {
    const sort = (a, b) => {
        if(a === 0 && b!==0){
            return 1
        }
        else if( a!==0 && b === 0){
            return -1
        }
        else {
            return 0
        }
    }
    return arr.sort(sort)

}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))