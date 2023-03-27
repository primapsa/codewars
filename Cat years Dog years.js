

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears, dogYears = 0
    if (humanYears == 1) {
        catYears = dogYears = 15
    }
    if (humanYears == 2) {
        catYears = dogYears = 24
    }
    if (humanYears > 2) {
        catYears = 24 + (humanYears - 2) * 4
        dogYears = 24 + (humanYears - 2) * 5
    }
    return [humanYears, catYears, dogYears]
}
