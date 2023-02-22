function aliasGen(firstName, lastName) {
    const [fl] = firstName;
    const [sl] = lastName;
    return (/[A-Za-z]/.test(fl) && /[A-Za-z]/.test(sl))  ? `${firstName[fl.toUpperCase()]} ${surname[sl.toUpperCase()]}` : `Your name must start with a letter from A - Z.`

}

