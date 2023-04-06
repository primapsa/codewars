
const greatestDistance = (data) => {
    const acc = {};
    data.forEach((num, index) => {
        if (data.indexOf(num) !== data.lastIndexOf(num)) {
            if (!acc.hasOwnProperty(num)) {
                acc[num] = index
            } else {
                if (data.lastIndexOf(num) === index) {
                    acc[num] -= index
                }
            }
        }
    }

)
const greatestIndex = Object.values(acc).sort((a, b) => a - b)[0];
return greatestIndex < 0 ? Math.abs(greatestIndex) : 0

}
