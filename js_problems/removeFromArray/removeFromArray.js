const removeFromArray = function(array, ...remove_elements) {
    
    while(remove_elements.length > 0){
        let element = remove_elements.pop(); 
        for(let index = 0; index < array.length; index++){
            if(array[index] === element){
                array.splice(index,1);
            }
        }
    }
    return array; 
};

 console.log(removeFromArray([1, 2, 3, 4], 3, 2));

module.exports = removeFromArray;
