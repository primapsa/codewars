const sortByValueAndIndex = arr => arr.map((e, i) => ({value: e, mul: e * (i + 1)})).sort((a,b) => a.mul - b.mul).map(e => e.value)

/*
Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5
Output: 2, 3, 4, 23, 5
* */