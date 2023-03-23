const DAYS_IN_MS = 1000*60*60*24
const periodIsLate = (last, today, cycleLength) => cycleLength < ((today - last) / DAYS_IN_MS)
