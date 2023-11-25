function exampleSort(arr,pattern ){
    let sorted = []
    pattern.forEach(e => {
        const filtered = arr.filter(a => a === e)
        if(filtered.length){
            sorted = [...sorted, ...filtered]
        }
    })
    return sorted

}