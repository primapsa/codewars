/**
 *     a) Move the digit '1' to the front: 521 -> 512 -> 152. The digit '1' is moved two times.
 *     b) Move '5' to the end: 152 -> 125. The digit '5' is moved one time, so total movement = 3.
 * Of all the ways to accomplish this, the least digit moves = 3.
 */
const solve = (n) => {
    if(+n % 25 === 0) return 0
    const arr = [...n]
    let count = -1;
    let index = arr.length

    while (index > 0) {
        for (let i = arr.length - 1, j = i - 1; j >= 0; i--, j--) {
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
            ++count
            if(+arr.join('') % 25 === 0) return count
        }
        --index
    }
    return -1
}
console.log(solve('5071'))
