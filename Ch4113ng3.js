const nerdify = (txt, replacement = {a: 4,e: 3, l: 1, A : 4, E: 3}) => txt.replace(/[aAeEI]/g, e => replacement[e]);
