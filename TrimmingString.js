
const trim = (str, size) =>
{
    const cut = str.length <= 3 ? size : size <= 3 ? size : size -3
    const points = str.length < size ? '' : '...';
    return str.length <= size ? str : str.slice(0, cut) + points;
}

