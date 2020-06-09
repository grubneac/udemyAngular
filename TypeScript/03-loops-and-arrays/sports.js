var sportsOne = ["Golf", "Judo", "Tennis", "Swimming"];
sportsOne.forEach(function (element) {
    console.log(element);
});
console.log("----------------------------------------");
sportsOne.push("Windsurfing");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sportTemp = sportsOne_1[_i];
    if (sportTemp == 'Judo')
        console.log(sportTemp + " << my favorite sport!");
    else
        console.log(sportTemp);
}
