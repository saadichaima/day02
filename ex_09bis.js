
function splitOperation(operation) {
    ops = /(\d+)([\+\-\*\/])(\d+)/;
    
    result = operation.match(ops);
   
    return [parseInt(result[1]), result[2], parseInt(result[3])];

}

function doOperation(operation) {
    const result = splitOperation(operation);
    
    switch (result[1]) {
        case "+": return result[0] + result[2];
        case "-":return result[0] - result[2];
        case "/":
            if (result[2] !== 0) {
                return result[0] / result[2];
            } else {
                return "You can't divide by 0";
            }
        case "*":
            return result[0] * result[2];
       
    }
}
doOperation("1+2")
