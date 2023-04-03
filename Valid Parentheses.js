
function validParentheses(parenStr) {

    const brackets = [...parenStr];
    const stack = []
    for(let i = 0; i < parenStr.length; i++){
        if(brackets[i] === '('){
            stack.push(brackets[i])
        }
        if(brackets[i] === ')'){
            if(!stack.length) return false;
            stack.pop()
        }
    }
    return !stack.length
}
