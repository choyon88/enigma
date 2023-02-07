
function xorFinding(messages,key) {
    let finalResult = '';
    let message = '';
    for (let i = 0; i < messages.length; i++){
        let index = messages[i];
        if (index === key[i]) {
            finalResult += '0';
        } else {
            finalResult += '1';
        }
    }
    
    for (let j = 0; j < finalResult.length; j++){
        if (finalResult[j] === key[j]) {
            message += '0';
        } else {
            message += '1';
        }
    }
    return message;
}


let m = '11001010110';
let k = '10011100011';
const output = xorFinding(m, k);
console.log(output);

    