const totalBill = (str) =>{
    if(!str.trim()) return 0
    const plates = str.match(/\w/g)?.length
    const withoutFree = plates - Math.trunc(plates / 5)
    return  withoutFree * 2
}
