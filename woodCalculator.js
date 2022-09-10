function woodCalculator(chairWood, tableWood, bedWood){
    var totalChairWood = chairWood * 1;
    var totalTableWood = tableWood * 3;
    var totalBedWood = bedWood * 5;
    var totalWood = totalChairWood + totalBedWood + totalTableWood;
    return totalWood;
}

var totalWoodNeed = woodCalculator(2, 2, 1);
console.log(totalWoodNeed);