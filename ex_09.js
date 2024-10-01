function splitOperation(operation) {
    ops = /(\d+)([\+\-\*\/])(\d+)/;
    
    result = operation.match(ops);
   
    return [parseInt(result[1]), result[2], parseInt(result[3])];

}
console.log(splitOperation("1+2"))
