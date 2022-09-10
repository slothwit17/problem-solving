function oddnumbers(odds){
    var init = [];
    for (var i = 0; i < odds.length; i++){
        var element = odds[i];
        if (element%2 != 0){
            init.push(element);
        }
    }
    return init;
}

var numbers = [2, 3, 5, 7, 9 , 1, 6];
var result = oddnumbers(numbers);
console.log(result);