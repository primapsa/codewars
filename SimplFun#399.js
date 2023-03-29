function makeSequences(n){
    let count =  Math.floor(n / 2);
 let container = [];
 let result = [];
    for(let c = 1; c <= count; c++ ){
        container.push(c)
    }
    for(let i = 0; i < container.length; i++){
        let k = i;
        while(k){
            k = Math.trunc(k / 2);
            if(k){
                result.push(k)
            }



        }
    }
    console.log(result)
}

makeSequences(10)