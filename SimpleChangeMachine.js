const changeMe = (moneyIn) => {
    const allowed = {'£5': '500', '£2': '200', '£1': '100', '50p': '50', '20p': '20'}
    if (!(moneyIn in allowed)) return moneyIn;
    let banknote = +allowed[moneyIn]
    let twenty = banknote > 20 ? Math.floor(banknote / 20): 0
    let tenth = Math.floor((banknote - twenty * 20) / 10)
    let change = (twenty ? '20p '.repeat(twenty) : '') + '' + (tenth ? '10p '.repeat(tenth) : '')
    return change.trim();

}
