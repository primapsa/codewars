function isDivisible() {
    const args = [...arguments]
    const divisible = args.shift()
    let counter = 0
    for (let i = 0; i <= args.length; i++) {
        if (divisible % args[i]) return false
    }
    return true
}
