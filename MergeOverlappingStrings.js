function mergeStrings(first, second) {
    let postion = second.length
    while (postion) {
        let substr = second.slice(0, postion)
        if(first.endsWith(substr)) return first + second.slice(postion)
        postion--;
    }
    return first + second
}
//mergeStrings=(a,b)=>!a||b.startsWith(a)?b:a[0]+mergeStrings(a.slice(1),b)

