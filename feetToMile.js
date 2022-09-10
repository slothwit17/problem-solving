function footToMile(foot){
    var mile = foot/5280;
    return mile;
}

var result = footToMile(500);
console.log(result);