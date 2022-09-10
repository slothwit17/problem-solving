function arraySort(variables){

    for (let i = 0; i < variables.length; i++){
        for (let j = i+1; j < variables.length; j++){
            if(variables[i] > variables[j]){
                var temp = variables[i];
                variables[i] = variables[j];
                variables[j] = temp;
            }
        }
    }
    return variables;

}

var sort = [3, 6, 2 , 7, 9, 5, 1, 4];
var result = arraySort(sort);
console.log(result);