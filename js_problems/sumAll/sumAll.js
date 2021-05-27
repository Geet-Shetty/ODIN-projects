const sumAll = function(starting_int, ending_int) {
    if(typeof starting_int !== 'number' || typeof ending_int !== 'number') {
        return "ERROR";
    } 
    else if (starting_int < 0 || ending_int < 0) {
        return "ERROR"; 
    } 
    else if(starting_int > ending_int){
        let temp = starting_int;
        starting_int = ending_int;
        ending_int = temp; 
    } 
    let sum = 0; 
    for(let int = starting_int; int < ending_int+1; int++){
        sum += int;
    }
    return sum; 
};

console.log(sumAll(10, "90")); 
module.exports = sumAll;
