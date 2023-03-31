function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}
function gcdi(x,y) {

    return gcd_rec(Math.abs(x),Math.abs(y))
}
function lcmu(a, b) {
   return (Math.abs(a) * Math.abs(b)) / gcd_rec(Math.abs(a),Math.abs(b))
}
function som(a, b) {
   return a + b
}
function maxi(a, b) {
    return Math.max(a,b)
}
function mini(a, b) {
   return Math.min(a,b)
}
function operArray(fct, arr, init) {
   return arr.reduce((acc, el, ind) =>  ind ? [...acc, fct(acc[acc.length -1], el)] : [fct(acc[0],el)]
   ,[init])
}
