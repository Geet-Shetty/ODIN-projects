const repeatString = function(string, repetitions) {
    if(repetitions < 0) {
        return 'ERROR'; 
    }
    let result = "";
    for(let count = 0; count < repetitions; count++){
        result += string;
    }
    return result; 
};

module.exports = repeatString;
