const missingWord = (nums, str) => {
    const max = nums.sort((a, b) => a - b);
    return str[max[max.length - 1]] ? [...str.replace(/\s/g, '')]
        .filter((e, i) => max.includes(i))
        .map(el => el.toLowerCase())
        .join('') : "No mission today"
}
