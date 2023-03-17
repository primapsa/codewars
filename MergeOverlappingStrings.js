function mergeStrings(first, second) {
    let position = second.length;
    while (position){
        let substring= second.slice(0,position)
        let regExp = new RegExp(""+substring + "$")
        if(regExp.test(first)){
            return first + second.slice(position)
        }
        --position;
    }
return first + second;
}

