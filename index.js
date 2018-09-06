function dwarfRollCall(dwarves) {
  var dwarf = '';
for (let i = 0; i<dwarves.length; i++){
    dwarf += (`${i+1}. ${dwarves[i]} `);
  }
return dwarf;
}

function summonCaptainPlanet(planeteerCalls){
  var caps = [];
  for(let i =0; i<planeteerCalls.length; i++){
    caps.push(planeteerCalls[i].toUpperCase());
    return (`${caps[i]}!`);

  }
  return caps;
}


function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++){
    if(words[i].length > 4){
      return true;
    }
    return false;
  }
}

function findTheCheese (foods) {
  for (let i=0; i<foods.length; i++){
    if (foods[i]==="cheddar" || foods[i]==="gouda" || foods[i]==="camembert" ){
      return foods[i];
    }
  }
  return "no cheese!";
}
