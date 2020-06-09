let sportsOne: string[] = ["Golf","Judo", "Tennis","Swimming"];

sportsOne.forEach(element => {
    console.log(element);
    
});
console.log("----------------------------------------");

sportsOne.push("Windsurfing");

for(let sportTemp of sportsOne){
    if (sportTemp=='Judo')
        console.log(sportTemp + " << my favorite sport!");
    else
        console.log(sportTemp);
        
    
}