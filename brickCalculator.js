function brickCalculator(floor){
    var perFeetBricks = 1000;
    var bricks = 0;
    if(floor == 0){
        console.log("Don't need any bricks");
    } else if(floor<=10){
        bricks = floor*15*perFeetBricks;
    } else if(floor<=20){
        var firstPart = 10*15*perFeetBricks;
        var remaining = floor -10;
        var secondPart = remaining * 12 * perFeetBricks;
        bricks = firstPart + secondPart;
    } else{
        var firstPart = 10*15*perFeetBricks;
        var secondPart = 10 * 12 * perFeetBricks;
        var remaining = floor - 20;
        var lastPart = remaining * 10 * perFeetBricks;
        bricks = firstPart + secondPart + lastPart;
    }

    return bricks;
}

var brickNeed = brickCalculator(22);
console.log(brickNeed);