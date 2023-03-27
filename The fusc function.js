function fusc(n) {
    if(n === 0 || n === 1) return n;
    if( n % 2 === 0){
        return fusc( n / 2)
    }else{
        let even = Math.trunc( n / 2 )
        let odd = n - even;
        return fusc(even) + fusc(odd)
    }
}

