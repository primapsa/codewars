const bubblesortOnce = (a) => {
    /*  for(let i = a.length; i>= a.length-1; i--) {
          for (j = 0; j < i; j++){
             if(a[i] < a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp
             }
          }
      }
      return a*/
    for (let i = 0; i < a.length; i++) {
        if (a[i + 1] && a[i] > a[i + 1]) {
            let temp = a[i + 1];
            a[i + 1] = a[i];
            a[i] = temp;
        }
    }
    return a;
}
let inp = [758, 97, 662, 982, 584, 0, 772, 862, 869, 434,
    667, 153, 32, 765, 77, 680, 79, 930, 176, 269,
    335, 200, 41, 360, 666, 525, 510, 319, 315, 556,
    43, 697, 549, 755, 538, 905, 580, 412, 715, 818,
    767, 443, 149, 315, 589, 698, 684, 688, 554, 335,
    1, 137, 869, 614, 561, 27, 437, 314, 242, 853,
    211, 952]
console.log(bubblesortOnce(inp))

let ot = [97, 662, 758, 584, +0, 772, 862, 869, 434, 667, 153, 32, 765, 77, 680, 79, 930, 176, 269, 335, 200, 41, 360, 666, 525, 510, 319, 315, 556, 43, 697, 549, 755, 538, 905, 580, 412, 715, 818, 767, 443, 149, 315, 589, 698, 684, 688, 554, 335, 1, 137, 869, 614, 561, 27, 437, 314, 242, 853, 211, 952, 982]